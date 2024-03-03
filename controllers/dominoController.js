import dominoes from '../dominoes.js';
import { MongoClient, ObjectId } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();

const uri = process.env.DATABASE_URI;
const client = new MongoClient(uri);
const database = client.db('Dominos');
const boxes = database.collection('Boxes');

export const getNewBox = async (req, res) => {
    let response;
    let id;
    try {
        const box = {
            remaining: 28,
            shuffled: false,
            dominoes: dominoes,
        }
        const result = await boxes.insertOne(box);
        id = result.insertedId;
        if (ObjectId.isValid(result.insertedId)) {
            response = await database.collection('Boxes').findOne({ _id: result.insertedId })
        }
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({ message: `New Box of dominoes with SetId: ${id}`, newBox: response })
};

export const getNewSet = async (req, res) => {
    let response;
    let id;
    let shuffled = [];
    let temp = dominoes.slice();

    while (temp.length > 0) {
        let randomIdx = Math.floor(Math.random() * temp.length);
        temp[randomIdx].isFaceUp = false;
        shuffled.push(temp[randomIdx]);
        temp.splice(randomIdx, 1);
    };

    try {
        const box = {
            remaining: 28,
            shuffled: true,
            dominoes: shuffled,
        }
        const result = await boxes.insertOne(box);
        id = result.insertedId;
        if (ObjectId.isValid(result.insertedId)) {
            response = await database.collection('Boxes').findOne({ _id: result.insertedId })
        }
    } catch (error) {
        console.log(error);
    }

    res.status(200).json({ message: `New Set of shuffled dominoes with SetId: ${id}`, newSet: response })
};

export const shuffleSet = async (req, res) => {
    const { id } = req.params
    let response;
    let shuffled = [];
    let temp = dominoes.slice();

    while (temp.length > 0) {
        let randomIdx = Math.floor(Math.random() * temp.length);
        temp[randomIdx].isFaceUp = false;
        shuffled.push(temp[randomIdx]);
        temp.splice(randomIdx, 1);
    };

    try {
        const sendUpdate = await database.collection('Boxes').updateOne(
            { _id: new ObjectId(id) },
            {
                $set: { dominoes: shuffled, remaining: 28, shuffled: true },
                $currentDate: { lastModified: true }
            }
        );
        if (sendUpdate) {
            response = await database.collection('Boxes').findOne({ _id: new ObjectId(id) })
        }
    } catch (error) {
        console.log(error);
    }

    res.status(200).json({ message: `Shuffling Dominoes in Set: ${id}`, newSet: response })
};

export const drawDomino = async (req, res) => {
    const { id, count } = req.params
    let updatingRemaining;
    let updatingDominoes;
    let selectedDominoes = [];
    let response;

    const getSet = await database.collection('Boxes').findOne({ _id: new ObjectId(id) });
    if (getSet) {
        updatingRemaining = getSet.remaining;
        updatingDominoes = getSet.dominoes.slice();
    }
    for (let i = 0; i < count; i++) {
        updatingRemaining = updatingRemaining - 1
        let randomIdx = Math.floor(Math.random() * updatingDominoes.length);
        selectedDominoes.push(updatingDominoes[randomIdx]);
        updatingDominoes.splice(randomIdx, 1);
    }
    try {
        const sendUpdate = await database.collection('Boxes').updateOne(
            { _id: new ObjectId(id) },
            {
                $set: { dominoes: updatingDominoes, remaining: updatingRemaining },
                $currentDate: { lastModified: true }
            }
        );
        if (sendUpdate) {
            response = await database.collection('Boxes').findOne({ _id: new ObjectId(id) })
        }
    } catch (error) {
        console.log(error);
    }


    res.status(200).json({ message: `You picked up a domino!`, dominoes: selectedDominoes, remaining: updatingRemaining, response: response })

};

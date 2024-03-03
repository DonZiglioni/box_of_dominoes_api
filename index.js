import express from 'express';
import cors from 'cors';
import router from './routes/dominoRoutes.js';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static('public'));
app.use(express.static('dist'));

//  ****  V1  ****

app.get('/', async (req, res) => {
    res.status(200).json({ message: "Hello from the front page!" })
})

app.use('/api/v1/', router);

app.listen(PORT, () => {
    console.log("Server is running on PORT: ", PORT);
});
import{g as o}from"./index-CC2nWAIQ.js";function a(e,r){for(var E=0;E<r.length;E++){const t=r[E];if(typeof t!="string"&&!Array.isArray(t)){for(const T in t)if(T!=="default"&&!(T in e)){const N=Object.getOwnPropertyDescriptor(t,T);N&&Object.defineProperty(e,T,N.get?N:{enumerable:!0,get:()=>t[T]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var O,s;function I(){if(s)return O;s=1,O=e,e.displayName="iecst",e.aliases=[];function e(r){r.languages.iecst={comment:[{pattern:/(^|[^\\])(?:\/\*[\s\S]*?(?:\*\/|$)|\(\*[\s\S]*?(?:\*\)|$)|\{[\s\S]*?(?:\}|$))/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:[/\b(?:END_)?(?:PROGRAM|CONFIGURATION|INTERFACE|FUNCTION_BLOCK|FUNCTION|ACTION|TRANSITION|TYPE|STRUCT|(?:INITIAL_)?STEP|NAMESPACE|LIBRARY|CHANNEL|FOLDER|RESOURCE|VAR_(?:ACCESS|CONFIG|EXTERNAL|GLOBAL|INPUT|IN_OUT|OUTPUT|TEMP)|VAR|METHOD|PROPERTY)\b/i,/\b(?:AT|BY|(?:END_)?(?:CASE|FOR|IF|REPEAT|WHILE)|CONSTANT|CONTINUE|DO|ELSE|ELSIF|EXIT|EXTENDS|FROM|GET|GOTO|IMPLEMENTS|JMP|NON_RETAIN|OF|PRIVATE|PROTECTED|PUBLIC|RETAIN|RETURN|SET|TASK|THEN|TO|UNTIL|USING|WITH|__CATCH|__ENDTRY|__FINALLY|__TRY)\b/],"class-name":/\b(?:ANY|ARRAY|BOOL|BYTE|U?(?:D|L|S)?INT|(?:D|L)?WORD|DATE(?:_AND_TIME)?|DT|L?REAL|POINTER|STRING|TIME(?:_OF_DAY)?|TOD)\b/,address:{pattern:/%[IQM][XBWDL][\d.]*|%[IQ][\d.]*/,alias:"symbol"},number:/\b(?:16#[\da-f]+|2#[01_]+|0x[\da-f]+)\b|\b(?:D|DT|T|TOD)#[\d_shmd:]*|\b[A-Z]*#[\d.,_]*|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/,operator:/S?R?:?=>?|&&?|\*\*?|<[=>]?|>=?|[-:^/+#]|\b(?:AND|EQ|EXPT|GE|GT|LE|LT|MOD|NE|NOT|OR|XOR)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,punctuation:/[()[\].,;]/}}return O}var n=I();const R=o(n),i=a({__proto__:null,default:R},[n]);export{i};

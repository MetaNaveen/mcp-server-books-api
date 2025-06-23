import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';

export const MONGO_USER = process.env.MONGO_USER || '';
export const MONGO_PASSWORD =
    process.env.MONGO_PASSWORD || '';
export const MONGO_URL = process.env.MONGO_URL || '';
export const MONGO_TABLE = process.env.MONGO_TABLE || 'books';
export const MONGO_OPTIONS: mongoose.ConnectOptions = { retryWrites: true, w: 'majority' };

export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
export const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 12345;

const MONGO_URI = "mongodb://localhost:27017";
console.log(MONGO_URI);

/*
- Run MongoDb server: 

"C:\Users\user-1\Downloads\mongodb-win32-x86_64-windows-8.0.10\bin\mongod.exe" --dbpath="C:\Users\user-1\Downloads\mongodb-1\db" --logpath="C:\Users\user-1\Downloads\mongodb-1\logs\mongod.log"


- Add following 10 book entries using cmd.

curl -X POST http://localhost:12345/books/create -H "Content-Type: application/json" -d "{\"id\":\"1\",\"title\":\"The Pragmatic Programmer\",\"author\":\"Andrew Hunt\"}"
curl -X POST http://localhost:12345/books/create -H "Content-Type: application/json" -d "{\"id\":\"2\",\"title\":\"Clean Code\",\"author\":\"Robert C. Martin\"}"
curl -X POST http://localhost:12345/books/create -H "Content-Type: application/json" -d "{\"id\":\"3\",\"title\":\"Design Patterns\",\"author\":\"Erich Gamma\"}"
curl -X POST http://localhost:12345/books/create -H "Content-Type: application/json" -d "{\"id\":\"4\",\"title\":\"Refactoring\",\"author\":\"Martin Fowler\"}"
curl -X POST http://localhost:12345/books/create -H "Content-Type: application/json" -d "{\"id\":\"5\",\"title\":\"You Don’t Know JS\",\"author\":\"Kyle Simpson\"}"
curl -X POST http://localhost:12345/books/create -H "Content-Type: application/json" -d "{\"id\":\"6\",\"title\":\"JavaScript: The Good Parts\",\"author\":\"Douglas Crockford\"}"
curl -X POST http://localhost:12345/books/create -H "Content-Type: application/json" -d "{\"id\":\"7\",\"title\":\"The Mythical Man-Month\",\"author\":\"Frederick P. Brooks Jr.\"}"
curl -X POST http://localhost:12345/books/create -H "Content-Type: application/json" -d "{\"id\":\"8\",\"title\":\"Working Effectively with Legacy Code\",\"author\":\"Michael Feathers\"}"
curl -X POST http://localhost:12345/books/create -H "Content-Type: application/json" -d "{\"id\":\"9\",\"title\":\"Structure and Interpretation of Computer Programs\",\"author\":\"Harold Abelson\"}"
curl -X POST http://localhost:12345/books/create -H "Content-Type: application/json" -d "{\"id\":\"10\",\"title\":\"Domain-Driven Design\",\"author\":\"Eric Evans\"}"

*/
    
export const mongo = {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_URL,
    MONGO_TABLE,
    MONGO_OPTIONS,
    MONGO_CONNECTION: MONGO_URI
};

export const server = {
    SERVER_HOSTNAME,
    SERVER_PORT
};

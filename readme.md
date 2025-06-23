# Project: MCP Server integration with Books API

## Author: Naveen Kumar

## Prerequisite - Installations

1. NodeJS Latest version
2. Git 
3. Visual Studio Code with "Github Copilot" and "Github Copilot Chat" extensions
4. Nodemon global package (`npm install -g nodemon` in cmd)
5. Mongo DB (only if local mongo server is used - preferred)

## Run MongoDB and Add DB seeds
- Run MongoDb server: 

```
"C:\Users\user-1\Downloads\mongodb-win32-x86_64-windows-8.0.10\bin\mongod.exe" --dbpath="C:\Users\user-1\Downloads\mongodb-1\db" --logpath="C:\Users\user-1\Downloads\mongodb-1\logs\mongod.log"
```

- Add following 10 book entries using cmd.

```
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
```

- Update config.ts for MONGO_URI with connection string. The following uses sample config for local mongo-db server.
```
const MONGO_URI = "mongodb://localhost:27017";
```

## Run the app via Command Prompt
- For manual builds
```
npm run build
```
- For automatic rebuilds
```
nodemon
```

## MCP server config in VS Code

- Open VS Code user settings (Ctrl + Shift + P > Type "Settings.json" > Select the one with "user settings") and add,

```
"mcp": {
    "inputs": [],
    "servers": {
        "books-mcp-server-api": {
            "command": "node",
            "args": [
                "C:\\naveenkumar\\mcp-server-books\\build\\src\\index.js"
            ]
        }
    }
}
```

- Click `Start` or `Restart` option shown on stop of `books-mcp-server-api`.

## Credits
- https://github.com/karthikeyanVK/ and his team for the efforts they put to make me understand the topic.
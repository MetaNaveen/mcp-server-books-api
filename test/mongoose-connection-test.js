const uri = "mongodb+srv://thezeropayload:<db_password>@mcp-server-books-cluste.b6cdm8r.mongodb.net/?retryWrites=true&w=majority&appName=mcp-server-books-cluster";
//const uri = 'mongodb://localhost:27017';

const { MongoClient } = require('mongodb');

async function testConnection() {
  const client = new MongoClient (uri);
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db('testdb');
    await db.collection('test').insertOne({ name: 'Ping' });
    const docs = await db.collection('test').find().toArray();
    console.log("📦 Documents:", docs);
  } catch (e) {
    console.error("❌ Error:", e);
  } finally {
    await client.close();
  }
}

testConnection();


const mongoose = require('mongoose');
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);



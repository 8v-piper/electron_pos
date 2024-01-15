import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // MongoDB URI
const dbName = process.env.MONGODB_DB; // Database name

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    // Use existing database connection if available
    return { client: cachedClient, db: cachedDb };
  }

  // Connect to MongoDB
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const db = client.db(dbName);

  // Cache the database connection
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

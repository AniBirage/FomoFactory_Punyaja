import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(MONGODB_URI);

export const connectDB = async () => {
  try {
    await client.connect();
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

export const getDB = () => client.db('mydatabase');

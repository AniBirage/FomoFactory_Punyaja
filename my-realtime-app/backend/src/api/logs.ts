import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { MONGODB_URI } from '../config';

const client = new MongoClient(MONGODB_URI);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await client.connect();
    const db = client.db('stock_prices');
    const logCollection = db.collection('logs');
    const logs = await logCollection.find().sort({ timestamp: -1 }).limit(50).toArray();
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching logs', error });
  } finally {
    await client.close();
  }
};

export default handler;

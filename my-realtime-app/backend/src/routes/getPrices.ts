import express, { Request, Response } from 'express';
import Price from '../models/Price';

const router = express.Router();

router.get('/api/getPrices', async (req: Request, res: Response) => {
  const symbol = req.query.symbol as string;
  try {
    const prices = await Price.find({ symbol }).sort({ timestamp: -1 }).limit(20);
    res.json(prices);
  } catch (err) {
    console.error('Error fetching prices:', err);
    res.status(500).send('Internal Server Error');
  }
});

export default router;

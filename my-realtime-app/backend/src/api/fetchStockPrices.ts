import express from 'express';
import axios from 'axios';
import { MongoClient } from 'mongodb';
import schedule from 'node-schedule';
import { MONGODB_URI } from '../config';

const app = express();
const client = new MongoClient(MONGODB_URI);
const PORT = process.env.PORT || 3303;
const FINNHUB_API_KEY = 'cqnd029r01qhn56b0f2gcqnd029r01qhn56b0f30';

let STOCKS = ['AAPL', 'GOOGL', 'AMZN', 'MSFT', 'TSLA']; // Default stocks

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
client.connect().then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Fetch stock prices and store in MongoDB
const fetchAndStoreStockPrices = async () => {
  const db = client.db('stock_prices');
  const collection = db.collection('prices');

  for (const symbol of STOCKS) {
    try {
      const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`);
      const stockData = response.data;
      
      if (stockData) {
        const price = {
          symbol,
          open: stockData.o,
          high: stockData.h,
          low: stockData.l,
          close: stockData.c,
          timestamp: new Date(),
        };

        await collection.insertOne(price);
      }
    } catch (error) {
      console.error(`Error fetching data for ${symbol}:`, error);
    }
  }
};

// Endpoint to fetch stock prices
app.get('/api/fetchStockPrices', async (req, res) => {
  try {
    const db = client.db('stock_prices');
    const collection = db.collection('prices');
    const logs = await collection.find().toArray();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stock prices' });
  }
});

// Endpoint to update stock symbols
app.post('/api/setSymbols', (req, res) => {
  const { symbols } = req.body;
  if (Array.isArray(symbols)) {
    STOCKS = symbols;
    res.status(200).send('Symbols updated');
  } else {
    res.status(400).send('Invalid symbols format');
  }
});

// Root route to handle the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Stock Prices API');
});

// Schedule the job to run every 5 minutes
schedule.scheduleJob('*/5 * * * *', fetchAndStoreStockPrices);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

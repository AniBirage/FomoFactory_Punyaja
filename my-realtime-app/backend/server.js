const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3303;

app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend requests
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define your Log model (example)
const LogSchema = new mongoose.Schema({
  timestamp: Date,
  symbol: String,
  open: String,
  high: String,
  low: String,
  close: String,
});
const Log = mongoose.model('Log', LogSchema);

// Endpoint to fetch logs
app.get('/api/fetchStockPrices', async (req, res) => {
  try {
    const logs = await Log.find({}).sort({ timestamp: -1 }).limit(20);
    res.json(logs);
  } catch (error) {
    console.error('Error fetching logs:', error);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

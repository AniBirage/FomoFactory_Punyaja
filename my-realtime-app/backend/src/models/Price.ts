import mongoose from 'mongoose';

const priceSchema = new mongoose.Schema({
  symbol: String,
  open: Number,
  high: Number,
  low: Number,
  close: Number,
  timestamp: Date,
});

const Price = mongoose.model('Price', priceSchema);

export default Price;

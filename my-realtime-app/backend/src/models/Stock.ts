import mongoose from 'mongoose';

const StockSchema = new mongoose.Schema({
  symbol: String,
  open: Number,
  high: Number,
  low: Number,
  close: Number,
  timestamp: Date,
});

export const Stock = mongoose.model('Stock', StockSchema);

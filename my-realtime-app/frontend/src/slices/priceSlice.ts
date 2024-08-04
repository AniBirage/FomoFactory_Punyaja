import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface Price {
  timestamp: string;
  symbol: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface PriceState {
  prices: Price[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PriceState = {
  prices: [],
  status: 'idle',
};

const priceSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    setPrices(state, action: PayloadAction<Price[]>) {
      state.prices = action.payload;
    },
    setStatus(state, action: PayloadAction<'idle' | 'loading' | 'failed'>) {
      state.status = action.payload;
    },
  },
});

export const { setPrices, setStatus } = priceSlice.actions;
export default priceSlice.reducer;

// Selector function
export const selectPrices = (state: RootState) => state.prices.prices;
export const selectPriceStatus = (state: RootState) => state.prices.status;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface SymbolsState {
  symbols: string[];
}

const initialState: SymbolsState = {
  symbols: ['AAPL', 'GOOGL', 'AMZN', 'MSFT'],
};

const symbolsSlice = createSlice({
  name: 'symbols',
  initialState,
  reducers: {
    setSymbols(state, action: PayloadAction<string[]>) {
      state.symbols = action.payload;
    },
  },
});

export const { setSymbols } = symbolsSlice.actions;
export const selectSymbols = (state: RootState) => state.symbols.symbols;
export default symbolsSlice.reducer;

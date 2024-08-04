import { configureStore } from '@reduxjs/toolkit';
import logsReducer from '../slices/logsSlice';
import priceReducer from '../slices/priceSlice';
import symbolsReducer from '../slices/symbolsSlice';

const store = configureStore({
  reducer: {
    logs: logsReducer,
    prices: priceReducer,
    symbols: symbolsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;


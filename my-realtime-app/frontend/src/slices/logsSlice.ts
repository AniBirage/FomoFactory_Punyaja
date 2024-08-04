import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Log {
  close: string;
  low: string;
  high:string;
  open: string;
  timestamp: string;
  symbol: string;
  
}

interface LogsState {
  logs: Log[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: LogsState = {
  logs: [],
  status: 'idle',
};

// Define an async thunk for fetching logs
export const fetchLogs = createAsyncThunk('logs/fetchLogs', async () => {
  try {
    const response = await axios.get('http://localhost:3303/api/fetchStockPrices');
    return response.data;
  } catch (error) {
    console.error('Error fetching logs:', error);
    throw error;
  }
});

const logsSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLogs.fulfilled, (state, action) => {
        state.status = 'idle';
        state.logs = action.payload;
      })
      .addCase(fetchLogs.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default logsSlice.reducer;

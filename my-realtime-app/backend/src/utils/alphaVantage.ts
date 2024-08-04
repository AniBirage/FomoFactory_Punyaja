import axios from 'axios';

const FMP_API_KEY = 'UGv4ugLRtnldnyWHDdMiPLBZYUroDEUB';
const BASE_URL = 'https://financialmodelingprep.com/api/v3/';

export const fetchStockData = async (symbol: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol,
        interval: '5min',
        apikey: FMP_API_KEY,
      },
    });

    // Check the response structure
    console.log(response.data);

    // Process the response
    const data = response.data['Time Series (5min)'];
    return data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
};

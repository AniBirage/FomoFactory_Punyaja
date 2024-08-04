import express from 'express';
import getPricesRoute from './routes/getPrices';

const app = express();

app.use(express.json());
app.use(getPricesRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

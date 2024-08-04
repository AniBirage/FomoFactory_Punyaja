# Real-Time Price Data Mini-Website

This project is a mini-website that collects and displays real-time price data for stocks and cryptocurrencies. It includes a backend service to poll data from an API, store it in a MongoDB database, and a frontend application that displays the data dynamically.

## Features

- **Backend**
  - Polls real-time data every few seconds for 5 stocks or cryptocurrencies from a selected API.
  - Stores the data in a MongoDB database.

- **Frontend**
  - Fetches and displays the most recent 20 real-time data entries from MongoDB in a dynamic table.
  - Updates the table in real-time with new data.
  - Includes a modal/popup to change the stock or cryptocurrency being displayed.

## Technologies

- **Backend**: Node.js, Express, TypeScript, MongoDB
- **Frontend**: Next.js, TypeScript, Redux
- **State Management**: Redux with localStorage

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB instance
- API key for your chosen stock/crypto data API

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/real-time-price-data.git
   cd real-time-price-data
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   MONGODB_URI=mongodb://localhost:27017/price-data
   API_KEY=your-api-key
   API_URL=https://api.yourchosenapi.com/data
   ```

   Replace `your-api-key` and `https://api.yourchosenapi.com/data` with your actual API key and URL.

4. **Run the Backend**

   ```bash
   npm run start:backend
   ```

5. **Run the Frontend**

   In a new terminal window/tab:

   ```bash
   npm run start:frontend
   ```

6. **Open the Application**

   Navigate to `http://localhost:3000` in your web browser to view the application.

## Testing

To test the application locally, ensure both the backend and frontend services are running. The frontend will automatically fetch and display real-time data from the backend.

## Contributing

Feel free to open issues or submit pull requests. Contributions to improve the functionality or add new features are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to [API provider name] for the data API.
- [MongoDB](https://www.mongodb.com/) for the database service.
- [Next.js](https://nextjs.org/) and [Redux](https://redux.js.org/) for the frameworks used.

Make sure to replace placeholder values with actual data and update any specific instructions if your setup differs.

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
   git clone https://github.com/AniBirage/FomoFactory_Punyaja.git
   cd my-realtime-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

### Running the Backend

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Start the backend server:

   ```bash
   npm start
   ```

   The backend server will run on `http://localhost:3303`.

3. Check the backend API to view JSON data from the API:

   ```url
   http://localhost:3303/api/fetchStockPrices
   ```

### Running the Frontend

1. Open another terminal window/tab.

2. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

3. Start the frontend server:

   ```bash
   npm run dev
   ```

   The frontend application will be available at `http://localhost:3000`.

### Accessing the Application

Navigate to `http://localhost:3000` in your web browser to view the application.

## PS: This is my Brother's GitHub Account. Due to some Technical Issues with my Laptop I wasn't able to push it into my Account. Sorry for the Inconvenience and Thank You for Understanding.

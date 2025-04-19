const express = require('express');
const cors = require('cors');
const connectDb = require('./config/dbConn');
require('dotenv').config();

// App config
const app = express();
const PORT = process.env.PORT || 4000;

// Connect to DB
connectDb(); // Don’t forget to define this function in dbConn.js

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('API Working');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

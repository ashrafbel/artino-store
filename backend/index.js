const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Added this import
const AuthRouter = require('./Routes/AuthRouter');
const ProductsRouter = require('./Routes/ProductRouter');
const uploadMiddleware = require('./Middlewares/uploadMiddleware'); // Assuming this middleware is used in your routes

require('dotenv').config();
require('./Models/db'); // Make sure your DB connection is correct

const app = express();
const PORT = process.env.PORT || 8080;

// Basic route to check server status
app.get('/ping', (req, res) => {
  res.send('PONG');
});

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', AuthRouter);
app.use('/api', ProductsRouter);

// Serve static files (e.g., images) from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/worker', require('./routes/workerRoutes'));
app.use('/api/client', require('./routes/clientRoutes'));
app.use('/api/support', require('./routes/supportRoutes'));

// Error Handler Middleware
// app.use(require('./middlewares/errorHandler'));

module.exports = app;

const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/cart', require('./routes/cart'));

// Start server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));

const express = require('express');
const app = express();
const cors = require('cors');
const {mongoConnect} = require('./database/index');
require('dotenv').config();

// Db Connection
mongoConnect();

// Middleware
app.use(cors());
app.use(express.json({extended: false}));

// Default Route
app.get('/', (req, res) => {
  res.json({message: 'Server Running Successfully'});
});

// Routes
app.use('/api/milk', require('./routes/milkRoutes'));

// Listening
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});

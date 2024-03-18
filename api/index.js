const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const bcryptSalt = bcrypt.genSaltSync(10);
const app = express();
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5177',
}));
mongoose.connect('process.env.MONGO_URL');
app.get('/test', (req, res) => {
  res.json('test ok');


});
app.post('/register', async (req, res) => {

  const { name, email, password } = req.body;

  res.json({ name, email, password });


});
//sLvQvIZCTZYGFg4g

// Your routes and other middleware here

app.listen(4000);
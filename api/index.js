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
  origin: 'http://localhost:5173',
}));

mongoose.connect('mongodb+srv://Hike:oYxnRlROgpvVGoed@cluster0.geoeuuo.mongodb.net/');
app.get('/test', (req, res) => {
  res.json('test ok');


});
app.post('/register', async (req, res) => {

  const { name, email, password } = req.body;
  const userDoc = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, bcryptSalt),
  })
  res.json(userDoc);


});
app.post('/login', async (req,res) => {
 //mongoose.connect(process.env.MONGO_URL);
  const {email,password} = req.body;
  const userDoc = await User.findOne({email});
  if (userDoc) {
   /* const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign({
        email:userDoc.email,
        id:userDoc._id
      }, jwtSecret, {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json(userDoc);
      });
    } else {
      res.status(422).json('pass not ok');
    }*/
    res.json('found');

  } else {
    res.json('not found');
  }
});

//oYxnRlROgpvVGoed
// Your routes and other middleware here

app.listen(4000);
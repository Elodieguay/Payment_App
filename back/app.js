const express=require('express')
const app = express()
const cors = require('cors');
// const bodyParser = require('body-parser');
const home = require('./routes/home.routes.js')
const cart = require('./routes/cart.routes.js')

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use('/',home)
app.use('/',cart)

module.exports = app
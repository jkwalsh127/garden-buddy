//required packages
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/connection');
const routes = require("./routes");

const fs = require('fs');
const path = require('path');
require('dotenv/config');

const app = express();

//set port for local and deployed
const PORT = process.env.PORT || 3002;

//middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true }, err => {
      console.log('connected')
  });

// db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//     });
//   });
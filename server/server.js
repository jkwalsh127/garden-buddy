//required packages
const express = require("express");
const db = require('./config/connection');
const routes = require("./controllers");

const app = express();

//set port for local and deployed
const PORT = process.env.PORT || 3001;

//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
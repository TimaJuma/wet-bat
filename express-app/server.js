require("dotenv").config();
const port = process.env.PORT || 8080;

//server setup & modules import
const express = require("express");
const APP = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const pino = require("express-pino-logger")();

// // Middleware
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(bodyParser.json());
APP.use(cors());
APP.use(pino);

APP.listen(port, (err) =>
  console.log(err || `server listens on port: ${port}`)
);

// ENDPOINTS ==========================================================

APP.get("/test", (req, res) => {
  res.send("DDD");
});

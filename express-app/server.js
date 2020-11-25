require("dotenv").config();
const port = process.env.PORT || 8080;

//routes and DB functions
const apiRoutes = require("./routes/apiRoutes");
const apiDB = require("./database/dbFunctions");

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
// ('api/endpoint')
const apiRouter = express.Router();
apiRoutes(apiRouter, apiDB);
APP.use("/api", apiRouter);

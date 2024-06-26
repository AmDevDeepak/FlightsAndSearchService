const express = require("express");
const {PORT} = require('./config/serverConfig')
require('dotenv').config();
const setupAndStartServer = async () => {
  const app = express();
  app.listen(PORT, () => console.log("Server Started Successfully..."));
};
setupAndStartServer();

const express = require("express");
const dotenv = require("dotenv");

//load env vars

dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`SERVER RUNNING IN ${process.env.NODE_ENV} Mode on port ${PORT}`)
);

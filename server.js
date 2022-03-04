const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");

//load env vars
dotenv.config({ path: "./config/config.env" });

// connect DB
connectDB();
// Route files
const bootcamps = require("./routes/bootcamps");

const app = express();

// Body Paser
app.use(express.json());

//Mount Router
app.use("/api/v1/bootcamps", bootcamps);

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `SERVER RUNNING IN ${process.env.NODE_ENV} Mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandle rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  //close server
  server.close(() => process.exit(1));
});

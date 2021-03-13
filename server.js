require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const dotenv = require ("dotenv")
//dotenv.config()
const routesUrls = require("./routes");
const cors = require("cors");
const DB = process.env.DATABASE_ACCESS;
//const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"));
app.use(routesUrls);
app.listen(4000, () => console.log("server is up and running"));

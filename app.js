const express = require("express");
const cors = require("cors");
require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const indexRoute = require("./routes/index");

app.use(indexRoute);

module.exports = app;

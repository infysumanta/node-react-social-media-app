const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

module.exports = app;

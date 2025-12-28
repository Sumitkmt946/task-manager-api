// src/app.js
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const connectDB = require("./config/db");

const employeeRoutes = require("./routes/employeeRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// DB connect
connectDB();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/employees", employeeRoutes);
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

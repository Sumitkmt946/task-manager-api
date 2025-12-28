// src/models/Task.js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Done"],
    default: "Pending"
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true
  }
});

module.exports = mongoose.model("Task", taskSchema);

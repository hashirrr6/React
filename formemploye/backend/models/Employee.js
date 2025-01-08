// backend/models/Employee.js
const mongoose = require('mongoose');

// Define the employee schema
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
});

// Create and export the Employee model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

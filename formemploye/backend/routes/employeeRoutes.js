// backend/routes/employeeRoutes.js
const express = require('express');
const Employee = require('../models/Employee.js'); // Correct import from models folder
const router = express.Router();

// POST route to create a new employee
router.post('/', async (req, res) => {
  const { name, age, email, phone, des } = req.body;

  if (!name || !age || !email || !phone || !des) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newEmployee = new Employee({ name, age, email, phone, des });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create employee' });
  }
});

// GET route to fetch all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
});

// Export the router
module.exports = router;

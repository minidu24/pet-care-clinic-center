const express = require('express');
const Leave = require('../models/leavemodel');

const router = express.Router();

// Create Todo
router.post('/', async (req, res) => {
  try {
    const {  employeename,position,startDate,endDate,reason} = req.body;
    const newLeave= new Leave({
      employeename,
      position,
      startDate,
      endDate,
      reason,


    });
    await newLeave.save();
    res.status(201).json(newLeave);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Read all Todos
router.get('/', async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.status(200).json(leaves); // Corrected 'leave' to 'leaves'
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
})

// Update Todo
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const {  employeename,position,startDate,endDate,reason} = req.body;
      const updatedLeave = await Leave.findByIdAndUpdate(
        id,
        { employeename,position,startDate,endDate,reason },
        { new: true }
      );
      res.status(200).json(updatedLeave);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });


// Delete Todo
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Leave.findByIdAndDelete(id);
    res.status(200).json({ message: 'Leave deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
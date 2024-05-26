const express = require('express');
const router = express.Router();
const Schedule = require('../models/scheduleModel');

// Create a new schedule entry
router.post('/create', async (req, res) => {
  try {
    const { employeeName, shiftDate, shiftTime } = req.body;
    const newSchedule = new Schedule({ employeeName, shiftDate, shiftTime });
    await newSchedule.save();
    res.status(201).send(newSchedule);
  } catch (error) {
    res.status(500).send({ message: 'Error creating schedule entry' });
  }
});

// Get details of a specific schedule entry by ID
router.get('/:id', async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id);
    if (!schedule) {
      return res.status(404).send({ message: 'Schedule entry not found' });
    }
    res.send(schedule);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching schedule entry' });
  }
});

// Display details of a specific schedule entry for editing
router.get('/edit/:id', async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id);
    if (!schedule) {
      return res.status(404).send({ message: 'Schedule entry not found' });
    }
    res.send(schedule);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching schedule entry for editing' });
  }
});

// Update details of a specific schedule entry
router.put('/update/:id', async (req, res) => {
  try {
    const { employeeName, shiftDate, shiftTime } = req.body;
    const updatedSchedule = await Schedule.findByIdAndUpdate(req.params.id, { employeeName, shiftDate, shiftTime }, { new: true });
    if (!updatedSchedule) {
      return res.status(404).send({ message: 'Schedule entry not found' });
    }
    res.send(updatedSchedule);
  } catch (error) {
    res.status(500).send({ message: 'Error updating schedule entry' });
  }
});

// Delete a specific schedule entry
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedSchedule = await Schedule.findByIdAndDelete(req.params.id);
    if (!deletedSchedule) {
      return res.status(404).send({ message: 'Schedule entry not found' });
    }
    res.send({ message: 'Schedule entry deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting schedule entry' });
  }
});

module.exports = router;

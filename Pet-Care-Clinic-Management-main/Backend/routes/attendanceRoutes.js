const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendanceModel');

// Create attendance
router.post('/', async (req, res) => {
    try {
      const {  date, employeeName,absent,present } = req.body;
      const newAttendance= new Attendance({
          date,
          employeeName,
          absent,
          present,                                
  
      });
      await newAttendance.save();
      res.status(201).json(newAttendance);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const attendances = await Attendance.find();
      res.status(200).json(attendances);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

// Update attendance by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {  date, employeeName,absent,present } = req.body;
    const updatedAttendance = await Attendance.findByIdAndUpdate(
      id,
      { date, employeeName,absent,present},
      { new: true }
    );
    res.status(200).json(updatedAttendance);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Attendance.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Attendance deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting attendance.' });
  }
});

module.exports = router;




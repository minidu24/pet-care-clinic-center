const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  absent: {
    type: Boolean,
    default: false,
  },
  present: {
    type: Boolean,
    default: false,
  },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;



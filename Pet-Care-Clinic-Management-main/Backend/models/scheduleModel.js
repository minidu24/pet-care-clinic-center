const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true
  },
  shiftDate: {
    type: Date,
    required: true
  },
  shiftTime: {
    type: String,
    required: true
  }
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;

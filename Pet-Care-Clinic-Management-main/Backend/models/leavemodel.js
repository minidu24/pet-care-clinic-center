const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    employeename: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    reason: {
        type: String,
        required: true
    },


});

module.exports = mongoose.model('Leave', leaveSchema);
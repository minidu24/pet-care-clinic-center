const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hireDate: {
        type: Date,
        required: true
    },
 /*   position: {
        type: String,
        enum: ['vet', 'nurse', 'Manager', 'admin'],
        required: true
    },*/
    
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Employee', employeeSchema);

const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    usn: {
        type: String,
        required: true
    },
    attendance: {
        type: Number,
        required: true
    },
    cie: {
        type: Number,
        required: true,
        max: 20
    },
    branch: {
        type: String,
        required: true
    }
});

const Student = mongoose.model('Student',StudentSchema);

module.exports = Student;
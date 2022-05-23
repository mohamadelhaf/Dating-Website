const mongoose = require('mongoose');


const ContactSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('ContactedUs', ContactSchema);
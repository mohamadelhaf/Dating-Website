const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true,
        value: { type: Number, min: 18}
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    ContactedUs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        
    },
});

module.exports = mongoose.model('User', UserSchema);
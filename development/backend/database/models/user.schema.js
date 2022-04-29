const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        maxLength: 50,
        unique: true,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    fullname: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Researcher', 'Postdoc', 'PhD Student', 'Assistant', 'MSc Student', 'BSc Student'],
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    phone: {
        type: Number,
        required: true
    },
    phone2: {
        type: Number
    },
    email: {
        type: String,
        required: true
    },
    email2: {
        type: String
    },

}, { collection: 'user' });

module.exports = mongoose.model('User', userSchema);
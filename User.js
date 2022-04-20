const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        maxLength: 50
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    fullname: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ['Researcher', 'Postdoc', 'PhD Stud', 'Assistant', 'MSc.Stud', 'BSc.Stud']
    },
    admin: {
        type: Boolean
    },
    contact: {
        phone: {
            type: Number
        },
        phone2: {
            type: Number
        },
        email: {
            type: String
        },
        email2: {
            type: String
        },
    }
});

module.exports = mongoose.model('User', userSchema);
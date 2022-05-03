const mongoose = require('mongoose');

const mailtokenSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        expires: '5m',
        default: Date.now
    }
}, { collection: 'mailtoken' });

module.exports = mongoose.model('Mailtoken', mailtokenSchema);
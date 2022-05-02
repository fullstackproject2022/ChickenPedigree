const mongoose = require('mongoose');

const mailtokenSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    token: {
        type: Number,
        required: true
    }
}, { collection: 'mailtoken' });

module.exports = mongoose.model('Mailtoken', mailtokenSchema);
const mongoose = require('mongoose');

const historySchema = mongoose.Schema({
    userID: {
        type: String,
        unique: true,
        required: true
    },
    fChickenID: {
        type: String,
        unique: true,
        required: true
    },
    mChickenID: {
        type: String,
        unique: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { collection: 'history' });

module.exports = mongoose.model('History', historySchema);
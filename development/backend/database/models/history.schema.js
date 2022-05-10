const mongoose = require('mongoose');
var autoIncrement = require('mongoose-sequence')(mongoose)

const historySchema = mongoose.Schema({
    historyID: {
        type: Number,
        required: false,
        unique: true
    },
    userID: {
        type: String,
        unique: false,
        required: true
    },
    fChickenID: {
        type: Number,
        unique: false,
        required: true
    },
    mChickenID: {
        type: Number,
        unique: false,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { collection: 'history' });

historySchema.plugin(autoIncrement, { id: 'order_seq', inc_field: 'historyID' }) // handles auto incrementing in "counters" collection

module.exports = mongoose.model('History', historySchema);
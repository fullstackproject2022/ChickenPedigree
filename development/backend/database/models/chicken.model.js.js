const mongoose = require('mongoose');

// reference: https://mongoosejs.com/docs/validation.html
const chickenSchema = mongoose.Schema({
    batchYear: {
        type: Number,
        maxLength: 4,
        required: true
    },
    breed: {
        type: String,
        maxLength: 4
    },
    status: {
        type: String,
        enum: ['alive', 'dead', 'unknown'],
        default: 'unknown'
    },
    id: {
        type: Number,
        maxLength: 6,
        unique: true,
        required: true
    },
    sex: {
        type: String,
        enum: ['male', 'female', 'unknown'],
        maxLength: 1,
        default: 'unknown'
    },
    fParent: {
        type: Number,
        maxLength: 6,
        default: 0
    },
    mParent: {
        type: Number,
        maxLength: 6,
        default: 0
    },
    children: {
        type: [Number],
        default: []
    },
    comment: {
        type: String,
        default: ''
    },
}, { collection: 'chicken' });

module.exports = mongoose.model('Chicken', chickenSchema);
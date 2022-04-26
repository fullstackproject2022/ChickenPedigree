const mongoose = require('mongoose');

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
        enum: ['A', 'D', 'U'],
        default: 'U'
    },
    _id: {
        type: Number,
        maxLength: 6
    },
    sex: {
        type: String,
        enum: ['M', 'F', 'U'],
        maxLength: 1,
        default: 'U'
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
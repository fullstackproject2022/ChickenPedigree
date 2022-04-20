const mongoose = require('mongoose');

// reference: https://mongoosejs.com/docs/validation.html
const chickenSchema = mongoose.Schema({
    id: {
        type: Number,
        maxLength: 6
    },
    sex: {
        type: Boolean,
        enum: ['male', 'female', 'unknown']
    },
    batchYear: {
        type: Number,
        maxLength: 4
    },
    status: {
        type: String,
        enum: ['alive', 'dead', 'unknown']
    },
    fParent: {
        type: Number,
        maxLength: 6
    },
    mParent: {
        type: Number,
        maxLength: 6
    },
    species: {
        type: String
    },
    comment: {
        type: String
    },
});

module.exports = mongoose.model('Chicken', chickenSchema);
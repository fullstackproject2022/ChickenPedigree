const mongoose = require('mongoose');

const animalSchema = mongoose.Schema({
    speciesID: {
        type: String,
        maxLength: 3,
        minLength: 2,
        required: true
    },
    breed: {
        type: String,
        unique: true,
        required: true
    },
    latinName: {
        type: String
    }
}, { collection: 'animal' });

module.exports = mongoose.model('Animal', animalSchema);
const mongoose = require('mongoose');

const animalSchema = mongoose.Schema({
    specieID: {
        type: String,
        maxLength: 50
    },
    name: {
        type: String
    },
    latinName: {
        type: String
    }
});

module.exports = mongoose.model('Animal', animalSchema);
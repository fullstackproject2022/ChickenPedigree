const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    username: {
        type: String,
        maxLength: 50
    },
    password: {
        type: String,
        maxLength: 50
    }
});

module.exports = mongoose.model('Owner', ownerSchema);
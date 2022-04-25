const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    }
}, { collection: 'owner' });

module.exports = mongoose.model('Owner', ownerSchema);
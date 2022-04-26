const express = require('express');
const ROUTER = express.Router();
const dbPath = '../database/models/'
const Chicken = require(`${dbPath}/chicken.schema.js`);
const User = require(`${dbPath}/user.schema.js`);
const Animal = require(`${dbPath}/animal.schema.js`);
const Owner = require(`${dbPath}/owner.schema.js`);

const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');

// GET
ROUTER.get('/chicken', async (_, res) => {
    let data = await Chicken.find()
    if (!data) {
        res.status(400).json(
            { message: `Error: Pedigree data not found!` }
        )
    }
    res.send(data)
})

ROUTER.get('/users', async (_, res) => {
    let data = await Course.find()
    if (!data) {
        return res.status(400).json(
            { message: `Error: Course not found!` }
        )
    }
    res.send(data)
})

ROUTER.get('/owner', async (_, res) => {
    let data = await Owner.find() // should just return 1 Owner object
    if (!data || data.length > 1) {
        return res.status(400).json(
            { message: `Error: Registration date not found!` }
        )
    }
    res.send(data)
})

ROUTER.post('/login', async (req, res) => {
    console.log('Logging in...');

    const user = await User.findOne({ username: req.body.username });

    if (!user) {
        return res.status(400).json({ error: 'Username not found!'});
    };

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) {
        return res.status(400).json({ error: 'Invalid password!'})
    };


    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('token', token).json({token});

    console.log('Login Complete!');
});

module.exports = ROUTER

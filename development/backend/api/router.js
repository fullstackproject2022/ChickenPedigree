const express = require('express');
const ROUTER = express.Router();
const dbPath = '../database/models/'
const Chicken = require(`${dbPath}/chicken.schema.js`);
const User = require(`${dbPath}/user.schema.js`);
const Animal = require(`${dbPath}/animal.schema.js`);
const Owner = require(`${dbPath}/owner.schema.js`);

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
    let data = await User.find()
    if (!data) {
        return res.status(400).json(
            { message: `Error: User(s) not found!` }
        )
    }
    res.send(data)
})

ROUTER.get('/owner', async (_, res) => {
    let data = await Owner.find() // should just return 1 Owner object
    if (!data || data.length > 1) {
        return res.status(400).json(
            { message: `Error: Owner(s) not found!` }
        )
    }
    res.send(data)
})

module.exports = ROUTER

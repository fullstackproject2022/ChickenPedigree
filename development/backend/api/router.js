const express = require('express');
const ROUTER = express.Router();
const dbPath = '../database/models/'
const Chicken = require(`${dbPath}/chicken.schema.js`);
const User = require(`${dbPath}/user.schema.js`);
const Animal = require(`${dbPath}/animal.schema.js`);
const Owner = require(`${dbPath}/owner.schema.js`);

// get all chickens
ROUTER.get('/chicken', async (_, res) => {
    let data = await Chicken.find()
    if (!data) {
        res.status(400).json(
            { message: `Error: Pedigree data not found!` }
        )
    }
    res.send(data)
})

// get all users
ROUTER.get('/users', async (_, res) => {
    let data = await User.find()
    if (!data) {
        return res.status(400).json(
            { message: `Error: User(s) not found!` }
        )
    }
    res.send(data)
})

// get an owner
ROUTER.get('/owner', async (_, res) => {
    let data = await Owner.find() // should just return 1 Owner object
    if (!data || data.length > 1) {
        return res.status(400).json(
            { message: `Error: Owner(s) not found!` }
        )
    }
    res.send(data)
})

<<<<<<< HEAD
=======
// delete a user
ROUTER.delete("/delete/:id", async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        if (!user) {
            throw new Error("User does not exist");
        }
        await User.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

// get one user
ROUTER.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        if (!user) {
            throw new Error("User does not exist");
        }
        res.send(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

// update a user
ROUTER.put("/users/:id", async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        if (!user) {
            throw new Error("User does not exist");
        }
        user.username = req.body.username,
            user.firstname = req.body.firstname,
            user.lastname = req.body.lastname,
            user.fullname = req.body.fullname,
            user.password = req.body.password,
            user.role = req.body.role,
            user.admin = req.body.admin,
            user.contact = {
                phone: req.body.contact.phone,
                phone2: req.body.contact.phone2,
                email: req.body.contact.email,
                email2: req.body.contact.email2,
            }

        await user.save();
        res.send(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

// Create new User
ROUTER.post('/users/', async (req, res) => {
    try {
        const user = new User({
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            fullname: req.body.fullname,
            password: req.body.password,
            role: req.body.role,
            admin: req.body.admin,
            contact: {
                phone: req.body.contact.phone,
                phone2: req.body.contact.phone2,
                email: req.body.contact.email,
                email2: req.body.contact.email2,
            }
        });

        const foundUser = await User.findOne({ id: req.body.id });
        if (foundUser) throw new Error("User already exists");
        const newUser = await user.save();
        res.status(201).json({ newUser });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


>>>>>>> 7d3b654 (Initial CRUD fetches and APIs)
module.exports = ROUTER

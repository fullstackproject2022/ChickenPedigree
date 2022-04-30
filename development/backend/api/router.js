const express = require('express');
const ROUTER = express.Router();
const dbPath = '../database/models/'
const bcrypt = require('bcryptjs');
const Chicken = require(`${dbPath}/chicken.schema.js`);
const User = require(`${dbPath}/user.schema.js`);
const Animal = require(`${dbPath}/animal.schema.js`);
const Owner = require(`${dbPath}/owner.schema.js`);

const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');

// GET

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

// login validator
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
        const user = await User.findOne({ _id: req.params.id });
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
        const user = await User.findOne({ _id: req.params.id });
        if (!user) {
            throw new Error("User does not exist");
        }
        user.username = req.body.username,
            user.firstname = req.body.firstname,
            user.lastname = req.body.lastname,
            user.fullname = req.body.fullname,
            //user.password = req.body.password,
            user.role = req.body.role,
            user.admin = req.body.admin,
            user.phone = req.body.phone,
            user.phone2 = req.body.phone2,
            user.email = req.body.email,
            user.email2 = req.body.email2,


            await user.save();
        res.send(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

// Create new User
ROUTER.post('/users/', async (req, res) => {
    try {
        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashPssword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            fullname: req.body.fullname,
            password: hashPssword,
            role: req.body.role,
            admin: req.body.admin,
            phone: req.body.phone,
            phone2: req.body.phone2,
            email: req.body.email,
            email2: req.body.email2,

        });

        const foundUser = await User.findOne({ _id: req.body.id });
        if (foundUser) throw new Error("User already exists");
        const newUser = await user.save();
        res.status(201).json({ newUser });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = ROUTER;

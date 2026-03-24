const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./UserSchema');

const app = express();

app.use(express.json());
app.use(cors());

const mongoString = "mongodb+srv://thomask:bosstopdog@418-pa2.noxesab.mongodb.net/pa2db";
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database connected');
});

app.post('/createUser', async (req, res) => {
    console.log(`SERVER: CREATE USER REQ BODY: ${req.body.username} ${req.body.f_name} ${req.body.l_name}`);
    const un = req.body.username;
    try {
        User.exists({ username: un }).then(result => {
            if (Object.is(result, null)) {
                const user = new User(req.body);
                user.save();
                console.log(`User created! ${user}`);
                res.send(user);
            } else {
                console.log("Username already exists");
                res.status(500).send("Username already exists");
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/getUser', async (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    console.log(username);
    console.log(password);
    try {
        const user = await User.findOne({ username, password });
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(9000, () => {
    console.log(`Server is running on port 9000`);
});

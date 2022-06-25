const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const config = require('config');
const PORT = config.get('port') || 5000;
const app = express();

const cors = require('cors');
app.use(cors({origin: '*'}));

async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'));
        app.listen(PORT, ()=> { console.log(` App has been started on port ${PORT}... `) });
    }
    catch (e) {
        console.log(e);
    }
}

start();

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
})
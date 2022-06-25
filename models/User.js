const { model, Schema } = require('mongoose');

const User = new Schema({
    login: { type: String, required: true },
    password: { type: String, required: true },
    photoURL: { type: String },
    like: { type:  Number},
    name: { type: String }
});

module.exports = model('user', User);
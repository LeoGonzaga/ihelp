const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    bloodtype: String,
    email: String,
    password: String,
    birthday: String,
    phone: String,
    height: Number,
    weight: Number,
    orientation: String
});

module.exports = mongoose.model('User', UserSchema);
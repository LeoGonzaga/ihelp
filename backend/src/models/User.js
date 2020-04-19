const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

UserSchema.pre('save', function(next) {
    var user = this;
    bcrypt.hash(user.password, 10, function(err, hash){
        if(err){
            return next(err);
        }
        user.password = hash;
        next();
    })
});

module.exports = mongoose.model('User', UserSchema);
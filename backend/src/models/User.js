const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    bloodtype: String,
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    birthday: String,
    phone: String,
    height: Number,
    weight: Number,
    orientation: String,
    resetPassToken: String,
    resetPassTimer: Date
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
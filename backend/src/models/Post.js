const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    username: {type: String, required: true},
    bloodtype: {type: String, required: true},
    urgencia: {type: String, required: true},
    cidade: {type: String, required: true},
    hospital: {type: String, required: true},
    phone: {type: String, required: true}
});

module.exports = mongoose.model('Post', PostSchema);
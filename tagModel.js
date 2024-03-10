const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
}, { timestamps: true });

const tagModel = mongoose.Model('tag', tagSchema);
module.exports = tagModel;
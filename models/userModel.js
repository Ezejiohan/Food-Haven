const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    recipes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food Recipe'
    }
}, { timestamps: true });

const UserModel = mongoose.model('Users', userSchema);

module.exports = UserModel;
const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }, 
    quantity: {
        type: Number,
        require: true
    },
    unit: {
        type: String,
        required: true
    }
});

const ingredientModel = mongoose.model('ingredients', ingredientSchema);
module.exports = ingredientModel;
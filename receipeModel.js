const mongoose = require('mongoose');

const receipeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    }, 
    ingredient:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ingredient"
    }],
    steps:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "steps"
    }],
    tag: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tag"
    }],
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    servings: {
        type: Number,
        required: true
    },
    cooking_duration: {
        type: String,

    },
    food_rating: {
        type: Number,
        required: true
    },
    Comments: {
        type: String,
        required: true
    },
    allergy_information: {
        type: String,
        required:true
    }
}, { timestamps: true });

const receipeModel = mongoose.Model('receipe', receipeSchema);
module.exports = receipeModel;
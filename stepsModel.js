const mongoose = required('mongoose');

const stepsSchema = new mongoose.Schema({
    step: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const stepsModel =  mongoose.Model('steps', stepsSchema);
module.exports = stepsModel;

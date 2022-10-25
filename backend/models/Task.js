const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
    },
    isComplete: {
        type: Boolean,
        default: false,
        required: true
    },
    difficulty: {
        type: Number
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Task', userSchema);
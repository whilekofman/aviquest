const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String
    },
    isComplete: {
        type: Boolean,
        default: false,
        required: true
    },
    difficulty: {
        type: Number,
        default: 1,
        required: true

    },

}, {
    timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);
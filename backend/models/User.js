const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }],
    items: {
        type: Array,
        required: true,
        default: []
    },
    equipment: {
        type: Array,
        required: true,
        default: []
    },
    quest: {
        type: Object
    },

    attack: {
        type: Number,
        required: true,
        default: 5
    },

    coins: {
        type: Number,
        required: true,
        default: 0
    },

    maxHealth: {
        type: Number,
        required: true,
        default: 50
    },
    currentHealth: {
        type: Number,
        default: 50
    },

    imageUrl: String

}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
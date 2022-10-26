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
    tasks: [ {
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
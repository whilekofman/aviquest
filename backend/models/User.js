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
       type: Array,
       required: true,
       default: [{
        id: 6,
        title: 'Stop the Rats',
        description: 'Hunt 6 Rats',
        reward: {coin: 6, item: null},
        monster: {name: "Rat", currentHealth: 10, maxHealth: 10, attack: 10, imageUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/rat.gif', movingUrl: 'https://aviquest-dev.s3.amazonaws.com/GIFS/rat-move.gif'},
        timeFrame: 5,
        text: 'Vile creatures have crept up in our lands. Reports of attacks are trickling in slowly, but we cannot afford to sit back idly. This could get out of control very quickly. Hero, seek them out and deal with those horrible Rats.'
    }]
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

    imageUrl: {
        type: String,
        default: 'https://aviquest-dev.s3.amazonaws.com/Avitars/char1prof.gif'
    },
    
    movingImageUrl: {
        type: String,
        default: 'https://aviquest-dev.s3.amazonaws.com/Avitars/char1move.gif'
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
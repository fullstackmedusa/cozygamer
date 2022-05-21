const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    title: String,
    photoUrl: String,
    description: String,
    rating: String,
    genre: String,
    releaseYear: Number,
    cozyLevel: Number,
})

module.exports = mongoose.model('Game', gameSchema)
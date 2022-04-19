const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    title: String,
    description: String,
    rating: String,
    genre:{
        type: String,
        enum: ["Life Simulation Game", "Adventure Game", "Education Simulation", "Indie Game", "Role-Playing", "Casual Game", "Puzzle Game", "Anime Game"],
      },
    releaseYear: Number,
    cozyLevel: Number,
})

module.exports = mongoose.model('Game', gameSchema)
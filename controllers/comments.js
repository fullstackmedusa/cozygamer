const Game = require("../models/game");

module.exports = {
  create,
};

async function create(req, res) {
  console.log(req.body, " <- req.body", req.user);
  try {
    const game = await Game.findById(req.body.gameid);
    game.comments.push({
      content: req.body.comment,
      user: req.user._id,
    }); //mutate
    await game.save(); //save
    res.status(201).json({ data: "comment added!" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
}
const Game = require('../models/game');
const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); // initialize the S3 constructor

const BUCKET = process.env.BUCKET;

module.exports = {
    create,
    index,
	getByID,
}


function create(req, res){
	console.log(req.body, " <- req.body", req.file, " <photo", req.user);
    
	const filePath = `${uuidv4()}${req.file.originalname}`;
	const params = {Bucket: BUCKET, Key: filePath, Body: req.file.buffer}

	// s3 making a request to aws s3 bucket
	s3.upload(params, async function(err, data){
		// check aws error
		if (err) return res.status(400).json({err})
		// We're inside of the response from aws 
		try {
			// model talking to mongodb
			let game = await Game.create({
				title: req.body.title,
				description: req.body.description,
				photoUrl: data.Location,
                rating: req.body.rating,
                genre: req.body.genre,
                releaseYear: parseInt(req.body.releaseYear),
                cozyLevel: parseInt(req.body.cozyLevel)

			})
			// respond to the client
			// What file on the client can we log out this response?
			res.status(201).json({game})


		} catch(err){
			console.log(err)
			res.status(400).json({err})
		}


	})


 }
 


async function index(req, res) {
	try {
	 
	  const games = await Game.find({});
	  res.status(200).json({ games: games });
	} catch (err) {
	  res.status(400).json({ err });
	}
  }

  async function getByID(req, res) {
	try {
	  //this populates the user when you find the sightings
	  const games = await Game.find({ _id: req.params.gameID })
		// .populate("user")
		// .populate("comments.user")
		// .exec();
	  res.status(200).json(games[0]);
	} catch (err) {
	  console.log(err);
	  res.status(400).json({ err });
	}
  }
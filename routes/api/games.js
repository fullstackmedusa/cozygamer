const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/games');
const multer = require('multer');
const upload = multer(); // <- handles multipart/formdata requests(photos)
// /*---------- Public Routes ----------*/

// photo is the key on the formData object in the AddPost component
router.post('/', isAuthenticated, upload.single('photo'), gamesCtrl.create);
router.get('/', gamesCtrl.index)
router.get("/:gameID", gamesCtrl.getByID);

/*---------- Protected Routes ----------*/
function isAuthenticated(req, res, next){
	if(req.user){
		next()
	} else {
		res.status(401).json({data: 'Not Authorized!'})
	}
}



module.exports = router;


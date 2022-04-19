const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/games');

//----------- Public Routes -----------//
router.get('/', gamesCtrl.index)


function isAuthenticated(req, res, next){
    if(req.user) {
        next()
    } else {
        res.status(401).json({data: 'Not Authorized!'})
    }
}

module.exports = router;
const express = require('express');

const router = express();

const {findPlayers,findSinglePlayer,createPlayer,updatePlayer,deletePlayer} = require('../controllers/authors.controllers') ;

router.get('/players', findPlayers);

router.get('/players/:id',findSinglePlayer);

router.post('/players/create',createPlayer);

router.put('/players/update/:id',updatePlayer);

router.delete('/players/delete/:id',deletePlayer);

module.exports = router;
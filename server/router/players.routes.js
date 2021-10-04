const express = require('express');

const router = express();

const {findPlayers,findSinglePlayer,createPlayer,updatePlayer,deletePlayer,findState} = require('../controllers/players.controllers') ;

router.get('/players', findPlayers);

router.get('/players/:id',findSinglePlayer);

router.get('/players/state/:state',findState);

router.post('/players/create',createPlayer);

router.put('/players/update/:id',updatePlayer);

router.delete('/players/delete/:id',deletePlayer);


module.exports = router;
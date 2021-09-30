const Player = require('../models/players.models');

const findPlayers = (req,res) =>{
  Author.find({}).sort('name')
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message: 'Autores no encontrados'})
        res.sendStatus(404)
      })
};

const findSinglePlayer = (req,res) =>{
  Player.findOne({_id:req.params.id})
      .then(results => res.json({data:results}))
      .catch(error => {
        res.json({error:error, message: 'Autor no encontrado'})
        res.sendStatus(404)
      })
};


module.exports = {findPlayers,findSinglePlayer}
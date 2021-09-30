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

const createPlayer = (req,res) =>{
  Player.create(req.body)
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'Cant create a player'})
        res.sendStatus(500);
      })
};

const updatePlayer = (req,res) =>{
  Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'Cant update a player'})
        res.sendStatus(500);
      })
}

const deletePlayer =(req,res) =>{
  Author.deleteOne({_id:req.params.id})
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'No se pudo eliminar el autor'})
        res.sendStatus(202);
      }) 
}


module.exports = {findPlayers,findSinglePlayer,createPlayer,updatePlayer,deletePlayer}
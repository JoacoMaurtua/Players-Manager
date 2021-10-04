const Player = require('../models/players.models');

const findPlayers = (req,res) =>{
  Player.find({}).sort('name')
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message: 'Jugadores no encontrados'})
        res.sendStatus(404)
      })
};

const findState =(req,res) =>{
  Player.find({state:req.params.state})
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message: 'Estados no encontrados'})
        res.sendStatus(404)
      })
}; 

const findSinglePlayer = (req,res) =>{
  Player.findById(req.params.id)
      .then(results => res.json({data:results}))
      .catch(error => {
        res.json({error:error, message: 'Jugador no encontrado'})
        res.sendStatus(404)
      })
};

const createPlayer = (req,res) =>{
 /*  const players = req.body;
  players.state = ''; */        //todos arrancan sin estado
  Player.create(req.body)
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'Cant create a player'})
        res.sendStatus(500);
      })
};

const updatePlayer = (req,res) =>{
  Player.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'Cant update a player'})
        res.sendStatus(500);
      })
}

const deletePlayer =(req,res) =>{
  Player.deleteOne({_id:req.params.id})
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'No se pudo eliminar el autor'})
        res.sendStatus(202);
      }) 
}


module.exports = {findPlayers,findSinglePlayer,createPlayer,updatePlayer,deletePlayer,findState}
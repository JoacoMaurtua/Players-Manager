const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required:[true,'Name required!'],
      minlength: [3, 'El autor debe tener al menos 3 caracteres'],

    },

    position:{
      type: String,
      required:[true,'Name required!'],
    },

    state:{
      type: String,
    },

  },
  {timestamps:true}
);

const Player = mongoose.model('Player', playerSchema)

module.exports = Player
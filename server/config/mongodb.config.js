const mongoose = require('mongoose');

const dataBase = process.env.DB;

const connectDB = async() =>{
  try{
    await mongoose.connect(dataBase,{
      useNewUrlParser: true,
      useUnifiedTopology:true
    });

    console.log(`2: Established conexion whit the DB`);

  }catch(err){
    console.log(err);
  }
};

module.exports = connectDB;
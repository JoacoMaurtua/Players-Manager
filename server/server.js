const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

//MIDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Conexion con mongoDB
const mongodb = require('./config/mongodb.config');
mongodb();


//RUTAS


app.listen(PORT,()=>{
  console.log(`1: Server running in port: ${PORT}`)
})
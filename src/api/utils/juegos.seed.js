const mongoose = require('mongoose')
const Juego = require('../models/juego')
const juegos = require('../../data/juegos')






const lanzarSemilla = async () => {
  try {
    await mongoose.connect("mongodb+srv://practica6asg:Y003pLSFyGum5FtQ@practica6bd.emtbm.mongodb.net/?retryWrites=true&w=majority&appName=Practica6bd")  //nos  conectamos a la bd

    await Juego.collection.drop() //con drop eliminamos todo
    await Juego.insertMany(juegos) //con insertMany permite meter varios parametros
    console.log("Carga de semilla completada")

    await mongoose.disconnect(); // nos desconectamos de las bs

  } catch (error) {
    console.log('Error al lanzar semila')
  }
}

lanzarSemilla()
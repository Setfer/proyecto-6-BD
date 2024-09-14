const mongoose = require('mongoose')
const Personaje = require('../models/personaje')
const personajes = require('../../data/personajes')


const lanzarSemilla = async () => {
  try {
    await mongoose.connect("mongodb+srv://practica6asg:Y003pLSFyGum5FtQ@practica6bd.emtbm.mongodb.net/?retryWrites=true&w=majority&appName=Practica6bd")  //nos  conectamos a la bd

    await Personaje.collection.drop() //con drop eliminamos todo
    await Personaje.insertMany(personajes) //con insertMany permite meter varios parametros
    console.log("Carga de semilla completada")

    await mongoose.disconnect(); // nos desconectamos de las bs

  } catch (error) {
    console.log('Error al lanzar semila')
  }
}

lanzarSemilla()
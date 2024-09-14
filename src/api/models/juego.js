const mongoose = require('mongoose')

const juegoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    publicacion: { type: Number, required: true },
    genero: { type: String }
  },
  {
    //mostrar cuando se modifico
    timestamps: true,
    collection: 'juegos'
  }
);

const Juego = mongoose.model('juegos', juegoSchema, 'juegos');
module.exports = Juego

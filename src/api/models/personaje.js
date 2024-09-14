const mongoose = require('mongoose')

const PersonajeSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    arma: { type: String },
    juego: [{ type: mongoose.Types.ObjectId, ref: 'juegos', required: false }]
  },
  {
    //mostrar cuando se modifico
    timestamps: true,
    collection: 'personajes'
  }
)

const Personaje = mongoose.model('personajes', PersonajeSchema, 'personajes')
module.exports = Personaje

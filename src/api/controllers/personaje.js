const { findById } = require('../models/juego')
const Personaje = require('../models/personaje')

const getPersonajes = async (req, res, next) => {
  try {
    const allPersonajes = await Personaje.find().populate('juego')
    return res.status(200).json(allPersonajes)
  } catch (error) {
    return res.status(400).json('Algo ha salido mal')
  }
}

const getPersonajeById = async (req, res, next) => {
  try {
    const { id } = req.params
    const personaje = await Personaje.findById(id).populate('juego')
    return res.status(200).json(personaje)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const postPersonaje = async (req, res, next) => {
  try {
    const newPersonaje = new Personaje(req.body)
    const personajeSaved = await newPersonaje.save()
    res.status(201).json(personajeSaved)
  } catch (error) {
    return res.status(400).json('Algo ha fallado')
  }
}

const updatePersonaje = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldPersonaje = await Personaje.findById(id)

    if (!oldPersonaje) {
      return res.status(404).json('Personaje no encontrado')
    }

    if (req.body.juego) {
      const oldJuegos = oldPersonaje.juego || []
      const newJuegos = Array.isArray(req.body.juego)
        ? req.body.juego
        : [req.body.juego]

      const juegosDuplicados = newJuegos.filter((juego) =>
        oldJuegos.includes(juego)
      )

      if (juegosDuplicados.length > 0) {
        return res
          .status(400)
          .json(`El juego ya está incluido: ${juegosDuplicados.join(', ')}`)
      }

      const JuegosActualizados = [...new Set([...oldJuegos, ...newJuegos])]
      req.body.juego = JuegosActualizados
      const up = await Personaje.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      )

      return res.status(200).json(up)
    }

    const update = await Personaje.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    )

    return res.status(200).json(update)
  } catch (error) {
    return res.status(500).json('Algo ha fallado')
  }
}

const deletePersonaje = async (req, res, next) => {
  try {
    const { id } = req.params
    const personajeDeleted = await Personaje.findByIdAndDelete(id)
    return res.status(200).json(personajeDeleted)
  } catch (error) {
    return res.status(400).json('Algo ha fallado')
  }
}

module.exports = {
  getPersonajes,
  postPersonaje,
  updatePersonaje,
  deletePersonaje,
  getPersonajeById
}

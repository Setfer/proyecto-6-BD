const Juego = require('../models/juego')

const getJuegos = async (req, res, next) => {
  try {
    const allJuegos = await Juego.find()
    return res.status(200).json(allJuegos)
  } catch (error) {
    return res.status(400).json('Algo ha salido mal')
  }
}

const getJuegoByGenero= async (req, res, next) =>{
  try {
    const {genero} = req.params
    const resultados= await Juego.find({ genero: genero})
    return res.status(200).json(resultados);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }


}


const getJuegoById = async (req, res, next) => {
  try {
    const { id } = req.params
    const juego = await Juego.findById(id)
    return res.status(200).json(juego)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}



const postJuego = async (req, res, next) => {
  try {
    const newJuego = new Juego(req.body)
    const juegoSaved = await newJuego.save()
    res.status(201).json(juegoSaved)
  } catch (error) {
    return res.status(400).json('Algo ha fallado')
  }
}

const updateJuego = async (req, res, next) => {
  try {
    const { id } = req.params
    const newJuego = new Juego(req.body)
    newJuego._id = id
    const up = await Juego.findByIdAndUpdate(id, newJuego, { new: true })//con new true hacemos que nos devuelva el valor del objeto actualizado.
    return res.status(200).json(up)
  } catch (error) {
    return res.status(400).json('Algo ha fallado')
  }
}

const deleteJuego = async (req, res, next) =>{
try {
  const {id} = req.params;
  const juegoDeleted = await Juego.findByIdAndDelete(id)
  return res.status(200).json(juegoDeleted)
} catch (error) {
  return res.status(400).json('Algo ha fallado')
}

}


module.exports = { getJuegos, postJuego, updateJuego, deleteJuego, getJuegoByGenero, getJuegoById }

const { getJuegos, postJuego, updateJuego, deleteJuego, getJuegoByGenero, getJuegoById } = require('../controllers/juego.js');

const juegoRoutes = require('express').Router();

juegoRoutes.get('/', getJuegos);
juegoRoutes.post('/', postJuego);
juegoRoutes.put("/:id", updateJuego)
juegoRoutes.delete("/:id", deleteJuego)
juegoRoutes.get("/genero/:genero", getJuegoByGenero)
juegoRoutes.get("/:id", getJuegoById)

module.exports = juegoRoutes;

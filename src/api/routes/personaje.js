const { getPersonajes, postPersonaje, updatePersonaje, deletePersonaje, getPersonajeById } = require('../controllers/personaje');

const personajeRoutes = require('express').Router();

personajeRoutes.get("/", getPersonajes);
personajeRoutes.post('/', postPersonaje);
personajeRoutes.put("/:id", updatePersonaje)
personajeRoutes.delete("/:id", deletePersonaje)
personajeRoutes.get("/:id", getPersonajeById)

module.exports = personajeRoutes;

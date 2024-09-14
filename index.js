require('dotenv').config()


const express = require('express')

const { connectDB } = require('./src/config/db')
const juegoRoutes = require('./src/api/routes/juego')
const personajeRoutes = require('./src/api/routes/personaje')

const app = express()
app.use(express.json());

connectDB()

app.use('/api/v1/juegos', juegoRoutes)
app.use('/api/v1/personajes', personajeRoutes)

app.use('*', (req, res, next) => {
  return res.status(404).json('Rute not found')
})

app.listen(3000, () => {
  console.log('servidor en http://localhost:3000')
})

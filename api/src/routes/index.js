const { Router } = require('express');

const postCity = require("../controllers/postCity");
const getAllCities = require("../controllers/getCity");
const postClient = require("../controllers/postClient");
const postMovie = require("../controllers/postMovies");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// ruta para añadir una ciudad
router.post('/cinefilos/city', postCity);


//ruta para traer las ciudades
router.get('/cinefilos/city',getAllCities);
// Configurar los routers


//ruta para añadir un cliente
router.post('/cinefilos/client',postClient);


//ruta para añadir una pelicula
router.post('/cinefilos/movie', postMovie);

module.exports = router;

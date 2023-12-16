const { Router } = require('express');

const postCity = require("../controllers/postCity");
const getAllCities = require("../controllers/getCity");
const getClient = require("../controllers/getClient");
const postClient = require("../controllers/postClient");
const postMovie = require("../controllers/postMovies");
const getAllMovies = require("../controllers/getMovies");
const postFunction = require("../controllers/postFunction");
const getFunction = require("../controllers/getFunction");
const postBranch = require('../controllers/postBranch');
const getBranch = require('../controllers/getBranch');
const login = require('../controllers/login');
const postRoom = require('../controllers/postRoom');
const getRoom = require('../controllers/getRoom');
const postTypeChair = require('../controllers/postTypeChair');
const postChair = require('../controllers/postChair');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// ruta para añadir una ciudad
router.post('/cinefilos/city', postCity);

//ruta para traer las ciudades
router.get('/cinefilos/city',getAllCities);
// Configurar los routers

//ruta para traer un cliente o todos los clientes
router.get('/cinefilos/client/:id?',getClient);

//ruta para añadir un cliente
router.post('/cinefilos/client',postClient);

//ruta para login
router.get('/cinefilos/login',login);

//ruta para añadir una pelicula
router.post('/cinefilos/movie', postMovie);

//ruta para traer todas las peliculas
router.get('/cinefilos/movie',getAllMovies);

//ruta para añadir una sucursal
router.post('/cinefilos/branch', postBranch);

//ruta para traer todas las sucursales
router.get('/cinefilos/branch/:id?', getBranch);

//ruta para crear la sala
router.post('/cinefilos/room', postRoom);

//ruta para traer todas las salas
router.get('/cinefilos/room/:id?', getRoom);

//ruta para añadir una función
router.post('/cinefilos/function', postFunction);

//ruta para traer todos las funciones o una en particular
router.get('/cinefilos/function/:id?', getFunction);

//ruta para añadir un tipo de silla
router.post('/cinefilos/type', postTypeChair);

//ruta para añadir una silla
router.post('/cinefilos/chair', postChair);

module.exports = router;

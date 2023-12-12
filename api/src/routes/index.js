const { Router } = require('express');
const postCity = require("../controllers/postCity")
const getAllCities = require("../controllers/getCity")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// ruta para añadir una ciudad
router.post('/cinefilos/city', postCity);

//ruta para traer las ciudades

router.get('/cinefilos/city',getAllCities);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

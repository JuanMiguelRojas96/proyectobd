//ruta para agregar una pelicula
const { Movie } = require('../db');
const { Op } = require("sequelize");

const postMovie = async (req, res) => {
    try {
        const { name, duration, genre, synopsis, image } = req.body;

        const newMovie = await Movie.create({ name, duration, genre, synopsis, image });

        res.status(201).json({ message: "Pelicula añadida con exito " });
    } catch (error) {
        console.error('Error al insertar la pelicula:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = postMovie;
//controlador para traer todas las peliculas
const { Movie } = require('../db');
const { Op } = require("sequelize");

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.status(200).json(movies);
    } catch (error) {
        console.error('Error al traer las peliculas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = getMovies;
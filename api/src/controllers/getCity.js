const { City } = require('../db');

// Controlador para obtener todas las ciudades
const getAllCities = async (req, res) => {
  try {
    // Consulta todas las ciudades en la base de datos
    const cities = await City.findAll();

    // Envía la respuesta con todas las ciudades
    res.status(200).json(cities);
  } catch (error) {
    console.error('Error al obtener las ciudades:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = getAllCities;


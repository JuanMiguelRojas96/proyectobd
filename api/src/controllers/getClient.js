const { Client } = require('../db');  // Asegúrate de que la ruta sea correcta

// Controlador para insertar una ciudad en la base de datos
const getClient = async (req, res) => {
  try {
    // Obtén el cliente por su ID
    const { id } = req.params;
    id
        ? res.status(200).json(await Client.findOne({ where: { id: id } }))
        : res.status(200).json(await Client.findAll());
  } catch (error) {
    console.error('Error al buscar el cliente:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = getClient;
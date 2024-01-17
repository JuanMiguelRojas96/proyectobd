const { City } = require('../db');  // Asegúrate de que la ruta sea correcta

// Controlador para insertar una ciudad en la base de datos
const postCity = async (req, res) => {
  try {
    // Obtén los datos de la ciudad del cuerpo de la solicitud
    const { province, name } = req.body;

    // Inserta la ciudad en la base de datos
    const newCity = await City.create({ province, name });

    // Envía la respuesta con la nueva ciudad creada
    res.status(201).json({message : "Ciudad añadida con exito "});
  } catch (error) {
    console.error('Error al insertar la ciudad:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = postCity;


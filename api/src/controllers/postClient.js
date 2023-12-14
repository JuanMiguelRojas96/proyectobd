// controllers/clientController.js
const { Client } = require('../db'); // Asegúrate de ajustar la ruta según tu estructura de carpetas

async function createClient(req, res) {
  try {
    // Extraer datos del cuerpo de la solicitud (por ejemplo, desde un formulario)
    const { password, name, email, phone } = req.body;

    // Crear el cliente en la base de datos
    const newClient = await Client.create({ password, name, email, phone });

    // Enviar una respuesta de éxito con el nuevo cliente creado
    return res.status(201).json({ success: true, client: newClient });
  } catch (error) {
    console.error('Error al crear un cliente:', error);
    // Manejar errores y enviar una respuesta de error
    return res.status(500).json({ msg: error.message });
  }
}

module.exports = createClient;

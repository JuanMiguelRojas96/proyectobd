//ruta para crear un tipo de silla

const { Type } = require('../db');

const postTypeChair = async (req, res) => {
    try {
        // Obtén el cuerpo de la petición
        const { name, cost  } = req.body;
        // Crea una nueva silla en la base de datos
        const newTypeChair = await Type.create({ name, cost });
        // Envía la una respuesta de que se creo el tipo de silla
        res.status(201).json({message : "Tipo de silla añadida con exito "});
        
    } catch (error) {
        console.error('Error al crear el tipo de silla:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = postTypeChair;
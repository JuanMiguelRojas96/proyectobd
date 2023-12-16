const { Chair, Room,Type } = require('../db');

const postChair = async (req, res) => {
    try {
        // Obtén el cuerpo de la petición
        const { cinema, type } = req.body;
        // Crea una nueva silla en la base de datos
        const newChair = await Chair.create(cinema, type);

        //busca el cine en la base de datos
        const Cinema = await Room.findOne({ where: { id: cinema } });
        //busca el tipo de silla en la base de datos
        const TypeChair = await Type.findOne({ where: { id: type } });

        //asigna el cine a la silla
        await newChair.setRoom(Cinema);
        //asigna el tipo de silla a la silla
        await newChair.setType(TypeChair);

        // Envía la nueva silla creada como respuesta
        res.status(201).json({message : "Silla añadida con exito "});
    } catch (error) {
        console.error('Error al crear la silla:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = postChair;
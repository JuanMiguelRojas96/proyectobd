const { Function, Room, Movie } = require('../db.js');

const postFunction = async (req, res) => {
    try {
        const {room, movie, date, ticketSold} = req.body;
        //se busca la sala
        const roomFound = await Room.findOne({ where: { id: room } });
        // se busca la pelicula
        const movieFound = await Movie.findOne({ where: { name: movie } });
        // se crea la funcion
        const newFunction = await Function.create({ date, ticketSold });
        // se asigna la funcion a la sala
        await newFunction.setRoom(roomFound);
        // se asigna la funcion a la pelicula
        await newFunction.setMovie(movieFound);
        res.status(201).json({message : "Función añadida con exito "});
    } catch (error) {
        console.error('Error al insertar la Función:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = postFunction;
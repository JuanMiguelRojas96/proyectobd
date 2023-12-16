const { Function, Room, Movie } = require('../db.js');

const bulkFunction = async (req, res) => {
    try {
        const functionDataArray = req.body;
        console.log(functionDataArray);
        // Itera sobre el array de funciones y obtén las instancias de sala y película
        const functions = await Promise.all(
            functionDataArray.map(async (functionData) => {
                const { room, movie, date, ticketSold } = functionData;
                const roomFound = await Room.findOne({ where: { id: room } });
                const movieFound = await Movie.findOne({ where: { name: movie } });

                return { room: roomFound, movie: movieFound, date, ticketSold };
            })
        );
        
        // Utiliza bulkCreate para insertar todas las funciones a la vez
        const createdFunctions = await Function.bulkCreate(functions);

        res.status(201).json({ message: "Funciones añadidas con éxito", createdFunctions });
    } catch (error) {
        console.error('Error al insertar las Funciones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = bulkFunction;

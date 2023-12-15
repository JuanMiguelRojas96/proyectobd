const { Room } = require('../db');

const getRoom = async (req, res) => {
    try {
        // Obtén la sucursal por su ID
        const { id } = req.params;
        id
            ? res.status(200).json(await Room.findOne({ where: { id: id } }))
            : res.status(200).json(await Room.findAll());
      } catch (error) {
        console.error('Error al buscar la sala:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
}

module.exports = getRoom;
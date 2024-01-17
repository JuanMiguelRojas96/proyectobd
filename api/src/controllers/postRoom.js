const { Room, Branch } = require('../db.js');

const postRoom = async (req, res) => {
    try {
        const { name, capacity, branch } = req.body;
        // Se busca la sucursal
        const branchFound = await Branch.findOne({ where: { name: branch } });
        // Se crea la sala
        const newRoom = await Room.create({ name, capacity });
        // Se asigna la sala a la sucursal
        await newRoom.setBranch(branchFound);
        res.status(201).json({message : "Sala añadida con exito "});
    } catch (error) {
        console.error('Error al insertar la sucursal:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = postRoom;
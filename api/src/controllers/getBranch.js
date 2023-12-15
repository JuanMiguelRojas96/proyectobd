const { Branch } = require('../db.js');

const getBranch = async (req, res) => {
    try {
        // Obtén la sucursal por su ID
        const { id } = req.params;
        id
            ? res.status(200).json(await Branch.findOne({ where: { id: id } }))
            : res.status(200).json(await Branch.findAll());
      } catch (error) {
        console.error('Error al buscar la sucursal:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
}

module.exports = getBranch;
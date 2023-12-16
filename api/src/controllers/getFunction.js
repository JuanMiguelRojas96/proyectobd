const { Function } = require('../db.js');

const getFunction = async (req, res) => {
    try {
        // Obtén la sucursal por su ID
        const { id } = req.params;
        id
            ? res.status(200).json(await Function.findOne({ where: { id: id } }))
            : res.status(200).json(await Function.findAll());
      } catch (error) {
        console.error('Error al buscar la función:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
}

module.exports = getFunction;
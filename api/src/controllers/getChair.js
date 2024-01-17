const {Chair} = require('../db');

const getChair = async (req, res) => {
  // Obtén el id de la silla de los parámetros de la ruta
  const { id } = req.params;
  //si el id es undefined busca todas las sillas sino busca la silla con el id
  const chair = id ? await Chair.findOne({ where: { id } }) : await Chair.findAll();
  //si la silla no existe envia un mensaje de error
  if (!chair) {
    return res.status(404).json({ error: 'Silla no encontrada' });
  }
  //si la silla existe envia la silla como respuesta
  res.status(200).json({ message : "Silla encontrada"});
}

module.exports = getChair;

    
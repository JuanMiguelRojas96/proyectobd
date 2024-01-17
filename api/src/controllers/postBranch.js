const { Branch, City } = require('../db');

const postBranch = async (req, res) => {
    try {
        const { id, name, adress, phone, city } = req.body;     
        //Se busca la ciudad en la base de datos
        const branchCity = await City.findOne({ where: { name: city } });
        //Se crea la sucursal
        const newBranch = await Branch.create({ id, name, adress, phone });
        //Se asigna la sucursal a la ciudad
        await newBranch.setCity(branchCity);
        res.status(201).json({message : "Sucursal añadida con exito "});
    } catch (error) {
        console.error('Error al insertar la sucursal:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = postBranch;
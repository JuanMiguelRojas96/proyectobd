const { Client } = require('../db');  // Asegúrate de que la ruta sea correcta

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        const getCLient = await Client.findOne({ where: { email: email } });
        if (!getCLient) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        if (getCLient.password !== password) {
            return res.status(200).json({ token: false});
        }
        return res.status(200).json({ 
            token: true,
            clientData: {
                id: getCLient.id,
                name: getCLient.name,
                email: getCLient.email
            }
        });

    } catch (error) {
        console.error('Error de login:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = login;
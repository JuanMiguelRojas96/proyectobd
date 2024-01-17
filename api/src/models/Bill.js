const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Bill', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    date:{
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalAmount:{
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  },{ frezeeTableName: true, timestamps: false });
};

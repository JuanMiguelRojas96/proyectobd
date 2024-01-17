const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Movie', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    synopsis:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isUrl: {
          args: true,
          msg: "El valor ingresado no es una url"},
        notEmpty: true,}
    }
  },{ frezeeTableName: true, timestamps: false });
};
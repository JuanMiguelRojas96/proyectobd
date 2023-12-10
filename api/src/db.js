require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Bill, Chair, Branch, Function, Room, Ticket, Type, Client, City, Movie } = sequelize.models;

// Aca vendrian las relaciones
//?Relación Cliente - Factura
Client.hasMany(Bill);
Bill.belongsTo(Client);
//?Relación Sucursal - Factura
Branch.hasMany(Bill);
Bill.belongsTo(Branch);
//?Relación Factura - Ticket
Bill.hasMany(Ticket);
Ticket.belongsTo(Bill);
//?Relacion Funcion - Ticket
Function.hasMany(Ticket);
Ticket.belongsTo(Function);
//?Relacion Sala - Funcion
Room.hasMany(Function);
Function.belongsTo(Room);
//?Relacion Sala - Silla
Room.hasMany(Chair);
Chair.belongsTo(Room);
//?Relacion Tipo - Silla
Type.hasMany(Chair);
Chair.belongsTo(Type);
//?Relacion Ciudad - Sucursal
City.hasMany(Branch);
Branch.belongsTo(City);
//?Relacion Pelicula - Funcion
Movie.hasMany(Function);
Function.belongsTo(Movie);
//?Relacion Sala - Sucursal
Branch.hasMany(Room);
Room.belongsTo(Branch);
//?Relacion Pelicula - Funcion
Function.hasOne(Movie);
Movie.belongsTo(Function);


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};

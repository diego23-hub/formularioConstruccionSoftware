const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Persona = sequelize.define('Persona', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'personas',
    timestamps: false
});

module.exports = Persona;

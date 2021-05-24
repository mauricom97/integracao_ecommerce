'use strict';

const _ = require('lodash')

module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        codigo: DataTypes.STRING,
        titulo: DataTypes.STRING,
        status: DataTypes.INTEGER

    }, {
        timestamps: false,
        tableName: 'categorias'
    });

    return Categoria;
};
'use strict';

const _ = require('lodash')

module.exports = (sequelize, DataTypes) => {
    const Estoque = sequelize.define('Estoque', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        quantidade: DataTypes.INTEGER,
        reserva: DataTypes.INTEGER,
        status: DataTypes.INTEGER

    }, {
        timestamps: false,
        tableName: 'estoque'
    });

    return Estoque;
};
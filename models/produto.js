'use strict';

const _ = require('lodash')

module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        codigo: DataTypes.STRING,
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        valor: DataTypes.FLOAT,
        status: DataTypes.INTEGER,
        idCategoria: DataTypes.INTEGER

    }, {
        timestamps: false,
        tableName: 'produtos'
    });
    //Produto.belongsTo(Categoria, { as: 'idCategoria', constraints: false })
    return Produto
};
const models = require('../models')
const _ = require('lodash')
const callback = require('../helpers/callback')
const { Op } = require("sequelize");
const moment = require("moment");


exports.index = async (req, res) => {

    let produto = await models.Produto.schema("ecommerce").findAll({
        order: [
            ['nome', 'asc']
        ]
    });
    res.send(callback.response('produto', produto))

}

exports.get = async (req, res) => {

    let produto = await models.Produto.schema("ecommerce").findOne({
        where: {
            id: req.params.id
        }
    });
    res.send(callback.response('produto', produto))

}

exports.update = async (req, res) => {

    let produto = await models.Produto.schema("ecommerce").update(req.body, {
        where: {
            id: req.params.id
        }
    });

    res.send(callback.response('produto', produto))

}

exports.create = async (req, res) => {

    let produto = req.body
    if(!produto){
        produto = req
    }

    await models.Produto.schema("ecommerce").create(produto).then((response) => {
        console.log("PRODUTO CADASTRADO")
    }).catch((error) => {
        if(error.code == 23505){
            console.log("IDENTIFICADOR DE PRODUTO JÁ UTILIZADO")
        }
        console.log(error)
    });

    

}

exports.delete = async (req, res) => {

    let produto = await models.Produto.schema("ecommerce").destroy({
        where: {
            id: req.params.id
        }
    });
    res.send(callback.response('produto', produto))

}
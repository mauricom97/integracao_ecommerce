const models = require('../models')
const _ = require('lodash')
const callback = require('../helpers/callback')
const { Op } = require("sequelize");
const moment = require("moment");


exports.index = async (req, res) => {

    let estoque = await models.Estoque.schema("ecommerce").findAll({

    });

    res.send(callback.response('estoque', estoque))

}

exports.get = async (req, res) => {

    let estoque = await models.Estoque.schema("ecommerce").findOne({
        where: {
            id: req.params.id
        }
    });
    res.send(callback.response('estoque', estoque))

}

exports.update = async (req, res) => {

    let estoque = await models.Estoque.schema("ecommerce").update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.send(callback.response('estoque', estoque))

}

exports.create = async (req, res) => {

    let estoque = req.body

    if (!estoque) {
        estoque = req
    }

    await models.Estoque.schema("ecommerce").create(estoque).then((response) => {
        console.log('NOVO ESTOQUE CADASTRADO')
    }).catch((error) => {
        if(error.code == 23505){
            console.log("PRODUTO COM IDENTIFICADOR JÁ CADASTRADO")
        }
        console.log(error)
    });
    

}

exports.delete = async (req, res) => {

    let estoque = await models.Estoque.schema("ecommerce").destroy({
        where: {
            id: req.params.id
        }
    });
    res.send(callback.response('estoque', estoque))

}
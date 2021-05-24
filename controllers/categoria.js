const models = require('../models')
const _ = require('lodash')
const callback = require('../helpers/callback')
const { Op } = require("sequelize");
const moment = require("moment");
const axios = require('axios')

exports.index = async (req, res) => {

    let categoria = await models.Categoria.schema("ecommerce").findAll({
        order: [
            ['titulo', 'asc']
        ]
    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    });

    if (req != 'integracao') {
        res.send(callback.response('categoria', categoria))
    }


}

exports.get = async (req, res) => {

    let categoria = await models.Categoria.schema("ecommerce").findOne({
        where: {
            id: req.params.id
        }
    });
    res.send(callback.response('categoria', categoria))

}

exports.update = async (req, res) => {

    let categoria = await models.Categoria.schema("ecommerce").update(req.body, {
        where: {
            id: req.params.id
        }
    }).then((response) => {
        res.send(callback.response('categoria', response))
        console.log(response)
    }).catch((error) => {
        res.send(callback.error('ERROR', 'Erro ao atualizar categoria'))
        console.log(error)
    });

}

exports.create = async (req, res) => {

    let categoria = req.body
    if (!categoria) {
        categoria = req
    }

    await models.Categoria.schema("ecommerce").create(req).then((response) => {
        console.log('NOVA CATEGORIA CADASTRADA')
    }).catch((error) => {
        if(error.code == 23505){
            console.log('IDENTIFICADOR DE CATEGORIA JÁ UTILIZADO')
        }
    });

}

exports.delete = async (req, res) => {

    let categoria = await models.Categoria.schema("ecommerce").destroy({
        where: {
            id: req.params.id
        }
    });
    res.send(callback.response('categoria', categoria))

}
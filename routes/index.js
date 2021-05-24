const categoria = require("./categoria")
const produto = require("./produto")
const estoque = require("./estoque")
var express = require("express")
var bodyParser = require("body-parser")


var app = express()

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })



module.exports = (app) => {
    app.use("/categorias", jsonParser, urlencodedParser, categoria)
    app.use("/produtos", jsonParser, urlencodedParser, produto)
    app.use("/estoque", jsonParser, urlencodedParser, estoque)

}
const axios = require('axios')
const CronJob = require('cron').CronJob
const createCategoria = require("../controllers/categoria").create

let newCategorias = new CronJob('* */48 */08 * * *', () => {

    var config = {
        method: 'GET',
        url: 'http://localhost:3000/categorias',
        headers: {
            'Content-Type': 'application/json'
        },
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            for(let i = 0; i != response.data.categoria.length; i++)
            {
                createCategoria(response.data.categoria[i])
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    newCategorias.stop()


}, null, true, 'America/Sao_Paulo')

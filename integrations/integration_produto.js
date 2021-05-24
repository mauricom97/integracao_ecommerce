const axios = require('axios')
const CronJob = require('cron').CronJob
const createProduto = require("../controllers/produto").create

let newProdutos = new CronJob('* */10 */09 * * *', () => {

    var config = {
        method: 'GET',
        url: 'http://localhost:3000/produtos',
        headers: {
            'Content-Type': 'application/json'
        },
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            for(let i = 0; i != response.data.produto.length; i++)
            {
                createProduto(response.data.produto[i])
            }
        })
        .catch(function (error) {
            console.log(error);
        });

        newProdutos.stop()


}, null, true, 'America/Sao_Paulo')
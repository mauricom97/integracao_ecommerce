const axios = require('axios')
const CronJob = require('cron').CronJob

const createEstoque = require("../controllers/estoque").create

let newEstoque = new CronJob('* */17 */09 * * *', () => {

    var config = {
        method: 'GET',
        url: 'http://localhost:3000/estoque',
        headers: {
            'Content-Type': 'application/json'
        },
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            for(let i = 0; i != response.data.estoque.length; i++)
            {
                createEstoque(response.data.estoque[i])
            }
        })
        .catch(function (error) {
            console.log(error);
        });

        newEstoque.stop()


}, null, true, 'America/Sao_Paulo')
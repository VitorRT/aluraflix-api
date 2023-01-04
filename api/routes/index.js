const bodyParser = require('body-parser');
const clientes = require('./clienteRoutes');

module.exports = app => {
    app.use(
        bodyParser.json(),
        clientes
    );

    app.get('/', (req, res) => {
        res.status(200).send({
            welcome: 'Boas-vindas a Aluraflix API REST! 🍿💌'
        });
    });
};
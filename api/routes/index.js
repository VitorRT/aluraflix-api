const bodyParser = require('body-parser');
const clientes = require('./clienteRoutes');
const videos = require('./videoRoutes');

module.exports = app => {
    app.use(
        bodyParser.json(),
        clientes,
        videos
    );

    app.get('/', (req, res) => {
        res.status(200).send({
            welcome: 'Boas-vindas a Aluraflix API REST! 🍿💌'
        });
    });
};
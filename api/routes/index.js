const bodyParser = require('body-parser');
const clientes = require('./clienteRoutes');
const video = require('./videoRoutes');
const playlist = require('./playlistRoutes');
const categoria = require('./categoriaRoutes');

module.exports = app => {
    app.use(
        bodyParser.json(),
        clientes,
        video,
        playlist,
        categoria
    );

    app.get('/', (req, res) => {
        res.status(200).send({
            welcome: 'Boas-vindas a Aluraflix API REST! 🍿💌'
        });
    });
};
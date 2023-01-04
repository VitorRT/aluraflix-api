const express = require('express');
const chalk = require('chalk');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();
routes(app);

const port = process.env.PORT || 3000;
const hostname = 'localhost';
const sv_url = `http://${hostname}:${port}`;

app.listen(port, () => {
    console.log(`\n${chalk.yellow(`${chalk.green('[ON]')} - Servidor rodando em [ ${chalk.grey(sv_url)} ]`)}`);
});

module.exports = app;

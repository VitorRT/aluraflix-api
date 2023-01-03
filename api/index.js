const express = require('express');
const chalk = require('chalk');

const app = express();

const port = process.env.PORT || 3000;
const hostname = 'localhost';
const sv_url = `https://${hostname}:${port}`;

app.listen(port, () => {
    console.log(`\n${chalk.yellow(`${chalk.green('[ON]')} - Servidor rodando em [ ${chalk.grey(sv_url)} ]`)}`);
});

module.exports = app;

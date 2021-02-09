//const { alias, boolean, argv } = require('yargs');

const { number } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'ES LA BASE DE LA TABLA DE MULTIPLICAR'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error('LA BASE TIENE QUE SE UN NUMERO');
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'LISTA LA TABLA DE MULTIPLICAR'
    })
    .option('h', {
        alias: 'hasta',
        type: number,
        default: 10,
        describe: 'DETERMINA HASTA QUE NUMERO DESEO MULTIPLICAR'


    })
    .argv;

module.exports = argv;
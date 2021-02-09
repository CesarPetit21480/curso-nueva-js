// requires

const { crearArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

///console.log(argv);
//console.log('base yars', argv.b);
//console.log('Requiere Listar', argv.l);
// no se usa asi fue ejemplo
/*
const [, , arg = '--base=5'] = process.argv;
const [, base = '5'] = arg.split('=');
console.log(base);*/
//let base = '5';

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then((archivo) => {
        console.log(`Archivo Creado ${archivo.rainbow}`)

    }).catch((err) => {
        console.log(err)

    })
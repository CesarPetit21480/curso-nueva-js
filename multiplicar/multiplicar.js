const fs = require('fs');
const colors = require('colors');

let data = ``;
let consola = ``;


const crearArchivo = async(base, listar, hasta) => {


    if (!Number(base)) {
        throw new Error(color(`El valor introducido ${base} no es un numero`, colors.red));
        return;
    }

    for (let i = 1; i <= hasta; i++) {
        res = base * i;
        data += (`${base} X ${i} = ${res} \n`);
        consola += (`${base} ${'X'.green} ${i} ${'='.red} ${res} \n`);
    }

    if (listar) {
        console.log('================'.red);
        console.log('TABLA DEL'.green, colors.blue(base));
        console.log('================'.red);
        console.log(consola);
    }

    // un metodo

    fs.writeFileSync(`Tablas/tabla-${base}.txt`, data)
    return (`tabla-${base}.txt`);


    // otro medoto
    /*
    fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
        if (err)
            return err;
        else
            return (`tabla-${base}.txt`);
    });
    */
}

module.exports = {
    crearArchivo
}
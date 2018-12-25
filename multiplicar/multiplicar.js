const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => { // Se puede poner limite = 10 para retornar un valor por defecto. yargs ya lo hace.
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Error, ${base} no es un numero.`)
        } else if (!Number(limite)) {
            reject(`Error, ${limite} no es un numero.`)
        }

        console.log('================='.green);
        console.log(`tabla de ${base}`.green);
        console.log('================='.green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        };
        resolve(`se ha ejecutado exitosamente.`)
    })
}

let crearArchivo = async(base, limite = 10) => {

    if (!Number(base)) {
        throw new Error(`Error, ${base} no es un numero.`)
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    };

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
        if (err) throw new Error(err);
    });
    return `tabla-${base}-al-${limite}.txt`

}

module.exports = {
    crearArchivo,
    listarTabla
}
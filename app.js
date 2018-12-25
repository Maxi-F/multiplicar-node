const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then((respuesta) => console.log(respuesta))
            .catch((err) => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no reconocido');
}

let argv2 = process.argv;

console.log(argv);
//console.log(argv2);

//let parametro = argv[2];
//let base = parametro.split('=')[1]
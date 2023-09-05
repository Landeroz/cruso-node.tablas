//const { option } = require('yargs');
const { crearArchivo } = require('./hellpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');
        


console.clear();


crearArchivo( argv.base, argv.l, argv.h )
     .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
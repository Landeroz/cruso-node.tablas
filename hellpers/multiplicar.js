const fs = require('fs');
const colors = require('colors');
const crearArchivo = ( base = 5, listar = false, hasta = 10 ) => {

return new Promise((resolve, reject) => {


      let salida = '';

     for ( let i = 1; i <= hasta; i++) {
      salida += `${ base } x ${ i } = ${ base * i }\n`;
      }
      if (listar){
        console.log('================='.green);
        console.log(' Tabla del:'.cyan, colors.cyan ( base ) );
        console.log('================='.green);
        console.log(salida);
    }
      
    
    
      fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
    


      resolve(`tabla-${ base }.txt`);
})
    
}

module.exports = {
    crearArchivo
} 

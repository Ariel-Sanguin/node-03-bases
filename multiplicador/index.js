const colors= require('colors');
const fs = require('fs');//importo filesystem para utilizarla
const{logica}= require('./logica')

const multiplicar = (base, limite, visualizar)=>{
    
    const resultado = logica(base, limite);
    if(visualizar){
        console.log(`=====================`.green);
        console.log(`tabla base ${base}`);
        console.log(`=====================`.green);
        console.log(resultado);
    }
    
    
    
    const nombreArchivo = `tabla-del-${base}.txt`;
    fs.writeFile(`tablas/${nombreArchivo}`, resultado, (err) => {
        if (err) throw err;
        console.log(`El archivo ${nombreArchivo} fue creado`.rainbow);
    });

}

module.exports = {
    //multiplicar: multiplicar
    multiplicar
}

const fs = require('fs');//importo filesystem para utilizarla
const{logica}= require('./logica')

const multiplicar = (base)=>{
    console.log(`=====================
    tabla base ${base}
    =====================`)
    const resultado = logica(base);
    
    console.log(resultado);
    const nombreArchivo = `tabla-del-${base}`;
    fs.writeFile(`tablas/${nombreArchivo}`, resultado, (err) => {
        if (err) throw err;
        console.log(`El archivo ${nombreArchivo} fue creado`);
    });

}

module.exports = {
    //multiplicar: multiplicar
    multiplicar
}
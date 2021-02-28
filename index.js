const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

const {multiplicar} = require("./multiplicador");

console.log(argv);



const base = 6;

multiplicar(argv.base); 

//multiplicar(base);
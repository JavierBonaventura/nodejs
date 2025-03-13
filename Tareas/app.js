//requerir modulos
// const process = require('process');
const tareasJs = require('./funcionesDeTareas');
//asignar argumento en la pos 2 a una variable
let argumento = process.argv[2];
//condiciones
switch(argumento){
    case "listar":
        console.log(tareasJs);
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción.")
        break;
    default:
        console.log("No entiendo qué quieres hacer.")
    }











//file system 
const fs = require('fs');
//obtener objetos del archivo json
let tareasJson = fs.readFileSync('./tareas.json','utf-8');
let tareasJs = JSON.parse(tareasJson);
//exportamos modulo
module.exports = tareasJs;

const fs = require ("fs")
let stringJson = fs.readFileSync("./tareas.json", "utf-8")

console.log(stringJson)

let arreglotareas = JSON.parse(stringJson)
console.log(arreglotareas)

function listarNoTerminadas (tareas){
    for (var i = 0; i < tareas.length; i++) {
       if (tareas[i].estado != "Completo"){console.log (tareas[i].titulo)} 
   } 
}
arreglotareas.push({titulo:"aaaa", descripcion:"aaaa", estado:"aaa"})

listarNoTerminadas(arreglotareas)
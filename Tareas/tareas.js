const tareas = [
{
    titulo : "Hacer calculadora",
    descripcion: "hace runa app que sume, reste, multiplique y divida",
    estado: "Incompleto",
},

{
    titulo: "Instalar windows",
    descripcion: "Instalar sistema operativo",
    estado: "Incompleto",
},
{
    titulo: "Instalar linux",
    descripcion: "Formatear pc e instalar operativo",
    estado: "Completo",
}
]
/*for (var i = 0; i < tareas.length; i++) {
   console.log (tareas[i].titulo) }


   console.log(tareas.length)
  */
 
   function listarTodas (){
    for (var i = 0; i < tareas.length; i++) {
        console.log (tareas[i].titulo) }
   }

   function listarNoTerminadas (){
    for (var i = 0; i < tareas.length; i++) {
       if (tareas[i].estado != "Completo"){console.log (tareas[i].titulo)} 
   } 
}

let datosConvertidos = JSON.stringify (tareas)
console.log(datosConvertidos)  


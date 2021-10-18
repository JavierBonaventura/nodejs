let listarTodas =require("./funcionesDeTareas")
let argumento = process.argv[2]
console.log(argumentonode)
switch (argumento) {
    case "listar":
        listarTodas()
        break;

    default:
        break;
}
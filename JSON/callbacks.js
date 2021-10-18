const bicicletas = [
  { marca: 'a', rodado: 16},
  { marca: 'b', rodado: 20},
  { marca: 'c', rodado: 26},
  { marca: 'd', rodado: 28},
];

function bicisMayorOIgual26(bicicleta)
{
  return bicicleta.rodado >= 26
}

const bicisDeAdultos = bicicletas.filter( bicisMayorOIgual26 )

console.log("adultos", bicisDeAdultos)


const bicisDeNinios = bicicletas.filter( bicicleta => bicicleta.rodado <= 20 )

console.log("niños", bicisDeNinios)

console.log(Math.round(55,12))
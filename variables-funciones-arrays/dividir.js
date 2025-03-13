function dividir(dividendo, divisor){
     if (divisor === 0) 
    {
        return console.log("No se puede dividir por cero")
    }
   else {
       return dividendo / divisor
    }    
}

module.exports = dividir
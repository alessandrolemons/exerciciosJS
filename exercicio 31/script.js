function verificarNegativos(numeros){
    
    let negativos = 0
    
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] < 0){
            negativos++
        }
    }
    return `Existem ${negativos} números negativos`
}

console.log(verificarNegativos([10,-5,-3,-6, 2,6]))
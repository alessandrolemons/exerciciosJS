function contarNumeros(numeros){
    let pares = 0
    let impares = 0

    //LOOP PARA VERIFICAR TODOS OS NÚMEROS DO VETOR E VERIFICA-LOS SE A DIVISÃO RESULTA EM 0
    for (let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            pares++
        }
        else{
            impares++
        }
    }

    return `No vetor passado os números existem ${pares} números pares e ${impares} números ímpares`
}

console.log(contarNumeros([1,2,3,4,5,6,7,8,9,10,11]))

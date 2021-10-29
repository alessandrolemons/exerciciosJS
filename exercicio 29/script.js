function contarnumeros(lista){

    let intervalo = 0
    let foraIntervalo = 0

    for(let i = 1; i <= lista.length; i++){
    if(lista[i] >= 10 && lista [i] <= 20){
        intervalo++
    }
    else{
        foraIntervalo++
    }
    }

    return `Existem ${intervalo} números entre 10 e 20 e ${foraIntervalo} números maiores ou menores`
}

console.log(contarnumeros([2,4,5,12,15,19,22,25]))
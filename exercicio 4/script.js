function calculoDivisao(dividendo, divisor) {

    let resultado = dividendo / divisor //Calculo para descobrir o resultado da divisão
    let resto = dividendo % divisor //Calculo para descobrir o resto da divisão

    return `O resultado da divisão é ${resultado.toFixed(0)}, considerando o resto como ${resto}`
}

console.log(calculoDivisao(10, 3)) //Input para digitar o dividendo e o divisor

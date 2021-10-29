function calcularFatorial(num) {

    let fatorial = 1

    for (var x = 1; x <= num; x++) {    //Loop para obter o fatorial
        fatorial *= x
    }

    return `O valor de ${num}! é ${fatorial}`
}

console.log(calcularFatorial(3)) // Input para digitar o valor do número que se deseja descobrir o fatorial
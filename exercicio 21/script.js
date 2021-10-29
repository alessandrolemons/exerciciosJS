function valorPlano(idade) {

    let valorPadrao = 100

    if (idade < 10) {
        valorAdicional = 80
    }

    else if (idade >= 10 && idade <= 30) {
        valorAdicional = 50
    }

    else if (idade > 30 && idade <= 60) {
        valorAdicional = 95
    }

    else {
        valorAdicional = 130
    }

    let valorFinal = valorPadrao + valorAdicional

    return `De acordo com sua idade o valor do plano ficará por ${valorFinal}`

}

console.log(valorPlano(10))
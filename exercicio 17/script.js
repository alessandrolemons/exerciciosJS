function qualAumento(plano, salario) {

    switch (plano) {
        case "A":
            plano = 10
            break;
        case "B":
            plano = 15
            break;
        case "C":
            plano = 20
            break;
        default:
            return "Digite uns dos planos disponíveis (A, B ou C)"
    }

    let aumento = plano / 100 * salario
    let salarioFinal = aumento + salario

    return `O salário final é ${salarioFinal}`

}

console.log(qualAumento("A", 1300))


function jurosSimples(capital, taxa, tempo) {

    let calculoJurosSimples = capital * taxa / 100 * tempo // Calculo para obter o juros
    let resultadoJurosSimples = capital + calculoJurosSimples // Soma o capital inicial com o juros obtido no calculo anterior

    return `O total a pagar após o acréscimo dos juros é ${resultadoJurosSimples.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
}

console.log(jurosSimples(200, 8, 12))

function jurosComposto(capital, taxa, tempo) {

    let montante = 1 + taxa / 100 ** 2
    let montante2 = capital * montante

    return `O total a pagar após o acréscimo dos juros compostos é ${montante2}`
}

console.log(jurosComposto(1000, 5, 2))
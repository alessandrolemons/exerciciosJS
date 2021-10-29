function valorAnuidade(mes, valor) {

    meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    mes = meses[mes]

    let anuidade = 5 / 100

    return `O mês é ${mes}`
}

console.log(valorAnuidade(0))
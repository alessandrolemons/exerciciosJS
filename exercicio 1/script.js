function calculo(num1, num2) {
    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;

    return `Com os números informados, sendo eles: ${num1} e ${num2}, obtemos os resultados de soma: ${soma}, 
    subtração: ${subtracao}, multiplicação ${multiplicacao} e divisão ${divisao} `
}

console.log(calculo(10, 2)) // Input para digitar os números que se deseja calcular

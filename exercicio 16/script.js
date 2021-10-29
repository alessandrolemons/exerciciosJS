function calculadora(num1, operador, num2) {


    switch (operador) {
        case "+":
            return num1 + num2
            break;
        case "-":
            return (num1 - num2)
            break;
        case "*":
            return (num1 * num2)
            break;
        case "/":
            return (num1 / num2)
            break;
        default:
            return "Infelizmente sou uma calculadora programada para efetuar somente contas de com sinais de +, -, * e /"
    }

}

console.log(calculadora(14, "+", 2))
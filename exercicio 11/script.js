function verificarBissexto(ano) {
    if (ano % 400 == 0) {
        return "É bissexto";
    }
    else {
        if (ano % 4 == 0 && ano % 100 != 0) {
            return "É bissexto";
        }

        else {
            return "Não é bissexto";
        }
    }
}

console.log(verificarBissexto(2019))

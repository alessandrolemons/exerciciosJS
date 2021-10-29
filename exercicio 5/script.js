function formatarValor(valor) {

    return `O valor formatado é ${valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}` // formata para a moeda local do país 

}

console.log(formatarValor(0.30000000000000004)) //Input do valor que se deja formatar
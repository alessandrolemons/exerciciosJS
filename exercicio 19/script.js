function valorProdutos(item, quantidade){
   
    //VALOR DOS PRODUTOS
    let hotdog = 3
    let hamburguer = 4
    let cheeseburguer = 5.5
    let bauru = 7.5
    let refrigerante = 3.5
    let suco = 2.8

    //SWITCH PARA DEFINIR QUAL O PRODUTO APARTIR DO CÓDIGO
    switch(item){
        case 100:
            item = hotdog
        break;
        case 200:
            item = hamburguer
        break;
        case 300:
            item = cheeseburguer
        break;
        case 400:
            item = bauru
        break;
        case 500:
            item = refrigerante
        break;
        case 600:
            item = suco
        break;
        default:
            return "[ERRO] O cógido do produto não existe, digite um número válido!"
    }
    
    //CALCULO DO VALOR COM OS ITENS
    let totalProdutos = item * quantidade
    
    return `Está aqui! Vai custar ${totalProdutos.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
}

console.log(valorProdutos(200, 3))
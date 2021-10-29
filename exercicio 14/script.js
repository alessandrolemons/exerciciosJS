function verificarFrutas(fruta) {

    switch (fruta) {
        case "maçã":
            return "Não vendemos esta fruta aqui"
            break;
        case "kiwi":
            return "Estamos com escassez de kiwis"
            break;
        case "melancia":
            return "Aqui está, são 3 reais o quilo"
            break;
        default:
            return "[ERRO] Você deve escolher entre maçã, kiwi ou melancia"
    }


}

console.log(verificarFrutas("melancia"))
function verificarTriangulo(lado1, lado2, lado3) {

    if (lado1 == lado2 && lado2 == lado3) { //Se o triângulo tiver o lado 1 igual o lado 2 e o lado 2 igual o lado 3 ele é Equilatero
        return 'O triângulo é Equilatero'
    }

    else if (lado1 != lado2 && lado2 != lado3) {  //Se o triângulo tiver o lado 1 diferente do lado 2 e o lado 2 diferente do lado 3 ele é escaleno
        return 'O triângulo é Escaleno'
    }

    else {
        return 'O triângulo é Isósceles' //Se não ele é Isósceles 
    }


}

console.log(verificarTriangulo(1, 2, 2)) //Input para digitar as medidas do triângulo
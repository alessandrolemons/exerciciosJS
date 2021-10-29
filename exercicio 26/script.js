function imprimirPares(){
    let pares = 0
    for(let i = 0; i <=100; i++){
        if( i % 2 === 0){
            console.log(`O número ${i} é par`)
            pares++
        }
    }
    console.log(`Até o número 100 existem ${pares} números pares`)
}

imprimirPares()
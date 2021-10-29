function formulaBhaskara(ax2, bx, c) {

    let delta = bx ** 2 - 4 * ax2 * c
    let raiz = Math.sqrt(delta)  //Raiz apartir do delta atribuido acima

    let bxNegativo = -bx - raiz //Resolução do dividendo com o B negativo
    let bxPositivo = -bx + raiz //Resolução do dividendo com o B positivo

    let divisor = 2 * ax2 //Divisor da bhaskara

    let bhaskaraN = bxNegativo / divisor //x'
    let bhaskaraP = bxPositivo / divisor //x''


    return `O resultado é ${bhaskaraP} e ${bhaskaraN} `
}

console.log(formulaBhaskara(3, -15, 12)) //Input dos algarismos ax2, bx, e c, respectivamente
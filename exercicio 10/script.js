function divisivelpor3(num) {
    if (num % 3 === 0) {
        return `O número ${num} é divisivel por 3. - > TRUE <-`
    } else {
        return `O número ${num} não é divisivel por 3. -> FALSE <- `
    }
}

console.log(divisivelpor3(2))
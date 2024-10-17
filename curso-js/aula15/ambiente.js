let num = [5, 8, 2, 9, 3]  // Array original
console.log (`1. A minha array original tem os seguintes números: ${num}`)
let insert1 = num.push(1) // Crio variável "insert" para inserir o número 1.
console.log(`2. Após inserir o número 1, minha array ficou assim: ${num}`)
num.sort() // Coloca minha array em ordem (1, 2, 3, 5, 8)
console.log(`3. Após colocar em ordem, minha array agora tem os seguintes números: ${num}`)
let insert2 = num.push(0) // Crio uma segunda variável para inserir o número 0.
console.log(`4. Após inserir o número 0 na minha nova array, fora de ordem, agora ela é assim: ${num}`)
let pos = num.indexOf(9) // Crio uma variável para pegar a posição do número 9 na minha array.
console.log(`5. A posição do número 9 na minha array é ${pos}`)
//console.log(`6. O primeiro número que eu adicionei foi o ${insert1} que está na posição ${num.indexOf(insert1)}`)
//console.log(`7. O segundo número que eu adicionei foi o ${insert2} que está na posição ${num.indexOf(insert2)}`)

/*
for (let pos = 0;pos <= num.length;pos++) {
    console.log(`${num[pos]}`)
}

console.log('Fim da estrutura anterior.')

for (let pos in num) {
    console.log(num[pos])
}
*/


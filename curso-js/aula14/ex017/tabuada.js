function gerarTabuada () {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert("Por favor,digite um número!")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        while (c <= 10) {
            let item = document.createElement('option') //Cria um elemento 'option' dentro do 'select'
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // Cria um 'value' para o 'option' (importante para outras linguagens de programação como o PHP)
            tab.appendChild(item)
            c++
        }
    }
    
}
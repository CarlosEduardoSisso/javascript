function contar() {
    let inicio = document.getElementById("inicio") //pega o valor inserido no campo "Início"
    let fim = document.getElementById("fim") // pega o valor inserido no campo "Fim"
    let passo = document.getElementById("passo") // pega o valor inserido no campo "Passo"
    let resultado = document.getElementsByClassName("resultado")[0] // pega o valor da <div> "Resultado"

    // INICIANDO AS VALIDAÇÕES
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert(`FALTAM INFORMAÇÕES!`)
    } else {
        resultado.innerHTML = `Contando...<br>`
        let i = Number(inicio.value) // Converte em número a 'string' inserida na "let inicio" lá em cima.
        let f = Number(fim.value) // Converte em número a 'string' inserida na "let fim" lá em cima.
        let p = Number(passo.value) // Converte em número a 'string' inserida na "let passo" lá em cima.
        if (p <= 0) {
            window.alert(`Passo inválido. Considerando Passo = 1`)
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += ` ${c} \u{27A1}`
            }
        } else {
            // Contagem descrescente
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += ` ${c} \u{27A1}`
            }
        }
        resultado.innerHTML += ` \u{1F3C1}`
    }
}
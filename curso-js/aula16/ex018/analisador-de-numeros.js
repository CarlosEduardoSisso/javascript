let num = document.querySelector('input#txtnum')
let selecao = document.querySelector('select#selarray')
let res = document.querySelector('div#res')
let array = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != 1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && inLista(num.value, array)) {

    } else {
        window.alert('Valor já está na lista!')
    }
}

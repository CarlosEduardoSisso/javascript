function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        msg.innerHTML += '<p><strong>Bom dia!</strong></p>'
        img.src = './hora-do-dia-imagens/manha-gareth-davies.jpg'
        document.body.style.background = '#ECC164'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        msg.innerHTML += '<p><strong>Boa tarde!</strong></p>'
        img.src = './hora-do-dia-imagens/tarde-sunset.jpg'
        document.body.style.background = '#F7793E'
    } else {
        //BOA NOITE!
        msg.innerHTML += '<p><strong>Boa noite!</strong></p>'
        img.src = './hora-do-dia-imagens/noite-rbrigant44.jpg'
        document.body.style.background = '#7C649C'
    }
}

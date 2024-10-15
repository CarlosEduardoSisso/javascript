function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var inputAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (inputAno.value == 0 || Number(inputAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
         var fsex = document.getElementsByName('sexo')
         var idade = ano - Number(inputAno.value)
         var genero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 5) {
                // Bebê
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>` 
                img.setAttribute ('src', './verificador-de-idade-imagens/2.crianca-menino.png')
                img.style.height = '250px'
                img.style.width = '250px'
                img.style.borderRadius = '50%'
            } else if (idade >= 5 && idade < 10) {
                // Criança
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>` 
                img.setAttribute ('src', './verificador-de-idade-imagens/4.menino.png')
                img.style.height = '250px'
                img.style.width = '250px'
                img.style.borderRadius = '50%'


            } else if (idade >= 10 && idade < 18) {
                // Adolescente
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>` 
                img.setAttribute ('src', './verificador-de-idade-imagens/6.adolescente-homem.png')
                img.style.height = '250px'
                img.style.width = '250px'
                img.style.borderRadius = '50%'


            } else if (idade >= 18 && idade < 50) {
                // Homem
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>` 
                img.setAttribute ('src', './verificador-de-idade-imagens/8.homem.png')
                img.style.height = '250px'
                img.style.width = '250px'
                img.style.borderRadius = '50%'


            } else if (idade = 50) {
                // Papai
                res.innerHTML = `Detectamos um ${genero} <strong>lindo, formoso, cheiroso, elegante, educado, perfeito</strong> com <strong>APENAS</strong> ${idade} anos de idade <em>(mas um "corpitcho" de um garotão de 20 anos de dar inveja em QUALQUER Tom Cruise da vida).</em><br>`
                img.setAttribute ('src', './verificador-de-idade-imagens/papai.jpeg')
                img.style.height = '250px'
                img.style.width = '250px'
                img.style.borderRadius = '50%'


            } else {
                // Idoso
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>` 
                img.setAttribute ('src', './verificador-de-idade-imagens/10.idoso.png')
                img.style.height = '250px'
                img.style.width = '250px'
                img.style.borderRadius = '50%'


            }
         } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                // Bebê
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>` 
                img.setAttribute ('src', './verificador-de-idade-imagens/1.crianca-menina.png')
                img.style.height = '250px'
                img.style.width = '250px'
                img.style.borderRadius = '50%'


            } else if (idade >= 5 && idade < 10) {
                // Criança
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>` 
                img.setAttribute ('src', './verificador-de-idade-imagens/3.menina.png')
                img.style.height = '250px'
                img.style.width = '250px'
                img.style.borderRadius = '50%'


            } else if (idade >= 10 && idade < 18) {
                // Adolescente
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>` 
                img.setAttribute ('src', './verificador-de-idade-imagens/5.adolescente-mulher.png')
                img.style.height = '250px'
                img.style.width = '250px'
                img.style.borderRadius = '50%'


            } else if (idade >= 18 && idade < 50) {
                // Mulher
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>` 
                img.setAttribute ('src', './verificador-de-idade-imagens/7.mulher.png')
                img.style.height = '250px'
                img.style.width = '250px'
                img.style.borderRadius = '50%'

                
            } else {
                // Idosa
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>` 
                img.setAttribute ('src', './verificador-de-idade-imagens/9.idosa.png')
                img.style.height = '250px'
                img.style.width = '250px'
                img.style.borderRadius = '50%'


            }
         }
         res.appendChild(img)
    }
}
function verificar(){
    var agora = new Date()
    var anoAtual = agora.getFullYear()  
    var ano = document.getElementById('iano')
    var res = document.querySelector('div#res')
    
    if (ano.value.length == 0 || Number(ano.value) > anoAtual){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('resex')
        var idade = anoAtual - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //garoto
                img.setAttribute('src', 'imagens/garoto.png')
            } else if (idade < 50){
                //homem
                img.setAttribute('src', 'imagens/homem.png')
            } else{
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //garota
                img.setAttribute('src', 'imagens/garota.png')
            } else if (idade < 50){
                //mulher
                img.setAttribute('src', 'imagens/mulher.png')
            } else{
                //idosa
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

    
}


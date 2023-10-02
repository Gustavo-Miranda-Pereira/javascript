function hora(){
    var agora = new Date()
    var hora = agora.getHours
    var hrtxt = document.querySelector('div#hrdia') 
    var imag = document.querySelector('img#ft')

    if (hora <= 4 && hora < 12){
        hrtxt.innerTxt = `Agora são ${hora} horas da manhã`
        imag.style.backgroun= 'url(../imagens/manha.jpg)'
    } else if (hora < 18){
        hrtxt.innerTxt = `Agora são ${hora} horas da tarde`
        imag.style.backgroun= 'url(../imagens/tarde.jpg)'
    } else if (hora <= 24) {
        hrtxt.innerTxt = `Agora são ${hora} horas da noite`
        imag.style.backgroun= 'url(../imagens/noite.jpg)'
    } else {
        hrtxt.innerTxt = `Agora são ${hora} horas da madrugada`
        imag.style.backgroun= 'url(../imagens/madrugada.jpg)'
    }
}
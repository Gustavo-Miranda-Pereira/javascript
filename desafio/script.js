function carregar() {
    var msg = window.document.getElementById('hrdia')
    var img = window.document.getElementById('ft')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora}`
    
    if (hora >= 4 && hora < 12){
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#78bce9'
    } else if (hora >= 12 && hora <18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#e9b878'
    } else if (hora >= 18 && hora <= 24){
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#101638'
    } else {
        img.src = 'imagens/madrugada.jpg'
        document.body.style.background = '#030511'
    }
}
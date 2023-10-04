function verificar(){
    var agora = new Date()
    var anoAtual = agora.getFullYear()  
    var ano = document.getElementById('iano')
    var res = document.querySelector('div#res')
    var idade = anoAtual - Number(ano.value)
    var fsex = document.getElementsByName('resex')
    
    if (ano.value.length == 0 || Number(ano.value) > anoAtual){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } 

    switch escrita(){
        
    }
}


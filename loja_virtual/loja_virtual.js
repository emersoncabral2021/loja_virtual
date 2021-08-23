var numslide = 1

setInterval(function(){
    numslide += 1
    mostraslider(numslide)
},3000)


function mudarslider(ns){
    mostraslider(numslide += ns);
}
function slideatual(ns){
    mostraslider(numslide = ns);
}
function mostraslider(ns){
    var slider = document.getElementsByClassName('slide')
    var indicador = document.getElementsByClassName('indicador')
    if(ns > slider.length){
        numslide = 1
    }
    if(ns < 1){
        numslide = slider.length
    }
    for(var i = 0;i < slider.length;i++){
        slider[i].style.display = "none"
    } 
    for(var i = 0;i < indicador.length;i++){
        indicador[i].className = indicador[i].className.replace(" ativo","")
    } 
    slider[numslide - 1].style.display = 'flex'
    indicador[numslide - 1].className += ' ativo'
}
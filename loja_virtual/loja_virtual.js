//slider
var numslide = 0

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

//conteiner main

var promocao = [
    {
        nome:'acer aspire 3',
        img:'',
        preço:'3.399,00',
        info:' Aspire 3 - A315-54-55WY Intel® i5-10210U Quad Core'
    },
    {
        nome:'acer aspire 5',
        img:'',
        preço:'4.399,90',
        info:'Intel Core i5-10210U 8GB 256GB SSD M.2 MX 250 com 2GB 15,6" Full HD Windows 10 Home, Cinza'
    },
    {
        nome:'Lenovo Ideapad S145',
        img:'',
        preço:'3.533,07',
        info:'Notebook Lenovo Ideapad S145 8ª Intel Core i5 8GB (GeForce MX110 com 2GB) 256GB SSD 15,6" Windows 10 - Prata'
    },
    {
        nome:'Asus Vivobook X543UA',
        img:'',
        preço:'4.081,71',
        info:'Notebook Asus Vivobook X543UA-DM3456T Intel Core i5-6200U 8GB 256GB W10 15.6" Cinza Escuro'
    },
    {
        nome:' Dell Inspiron I15',
        img:'',
        preço:'3.299,99',
        info:'Notebook Dell Inspiron I15-3501-A25P Intel Core I3-1005G1 4GB 256GB SSD W10 15.6" - Preto'
    },
    {
        nome:' Dell Vostro 5471',
        img:'',
        preço:'5.200,00',
        info:'Notebook DE VITRINE Dell Vostro 5471 i5-8250U| 8GB DDR4| HD 1TB| SSD 128GB| AMD Radeon 530 4GB| 14| Win10 PRO '
    },
    {
        nome:'Xiaomi Redmi Note 10 Pro',
        img:'',
        preço:'2.855,99',
        info:'Smartphone Xiaomi Redmi Note 10 Pro Tela 6,67" 6GB/128GB'
    },
    {
        nome:'Xiaomi Poco X3',
        img:'',
        preço:'2.223,07',
        info:'Smartphone Xiaomi Poco X3 128gb 6gb Ram Global Cinza'
    },
    {
        nome:'Samsung Galaxy M51 ',
        img:'',
        preço:'2.045,07',
        info:'Samsung Galaxy M51 Desbloqueado 128GB Dual Sim Android 10.0 Tela 6.67'
    },
    {
        nome:'Mouse Gamer CRUSADER ',
        img:'',
        preço:'58,00',
        info:'Mouse Gamer CRUSADER RGB 7200DPI Preto Fortrek G'
    },
    {
        nome:'Smart TV LED 32',
        img:'',
        preço:'1.359,15',
        info:'Smart TV LED 32'' HD SAMSUNG 32T4300 2 HDMI 1 USB Wi-Fi'
    },
    {
        nome:'Fone de Ouvido Gamer',
        img:'',
        preço:'847,42',
        info:'Fone de Ouvido Gamer Cloud II HyperX Preto/Vermelho/Headset/KHX-HSCP-RD/para PC/Xbox one/Ps4/Jogos/gamers'
    },
    {
        nome:'Geladeira/Refrigerador Electrolux',
        img:'',
        preço:'2.999,99',
        info:'Geladeira/Refrigerador Electrolux Duplex TW42S Top Freezer com Dispenser De Água 382L Inox - 110V'
    },
  
    
  
]
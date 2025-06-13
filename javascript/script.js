

 function carregar(){
    msg= window.document.getElementById('msg')
    img=  window.document.getElementById('imagem')

    data=new Date()
    hora=  data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >=0 && hora <12){
        //Bom dia!
        img.src='/manha.png'
        document.body.style.background='#e2cd9f'
    }else if (hora>=12 && hora<=18){
       // Boa tarde!
       img.src='/tarde.png'
       document.body.style.background='#b9846f'
    }else{
       // Boa noite!
       img.src='/noite.png'
       document.body.style.background='#515154'

    } 
 }
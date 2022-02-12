let imagem = document.createElement('img')
imagem.setAttribute('id', 'imgMouse')
imagem.setAttribute('src', 'imagens/mouse/mouse.png')
document.body.appendChild(imagem)
let imgMouse = document.getElementById('imgMouse')


function Mouse(e){

    $('#imgMouse').css('position', 'absolute')
    $('#imgMouse').css('top', e.clientY+10+'px')
    $('#imgMouse').css('left', e.clientX+100+'px')
    
}

$('body').on('mousemove', Mouse)
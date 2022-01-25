let destaques = document.querySelector('#destaques')

let r = 0

setInterval(function() {
    r = r+100

    if(r === 100){
        destaques.src="imagens/destaques/destaques2.png"
    }

    if(r === 200){
        destaques.src="imagens/destaques/destaques3.png"
    }

    if(r === 300){
        destaques.src="imagens/destaques/destaques1.png"
        r = 0
    }
  }, 3000);


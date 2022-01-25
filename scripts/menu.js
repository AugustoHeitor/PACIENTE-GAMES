let menu = document.getElementById("menu")

menu.addEventListener("mouseenter", troca1)
menu.addEventListener("mouseleave", troca2)

function troca1(){
    menu.src="imagens/header/controle.png"
}

function troca2(){
    menu.src="imagens/header/menu.png"
}
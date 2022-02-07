let inp = document.getElementById('inputFavoritos');
let list = document.getElementById('listaFavoritos')
let btnExcluir = document.getElementById('limpar')
let num = 1

function carregar(){
    let dados = JSON.parse(localStorage.getItem('Favoritos'))


    if(localStorage.Favoritos){
        let cxLista = document.getElementById('cx-list')
        let id = 0

        for(let i = 0; i < dados.length; i++){
            let p = document.createElement('p')
            p.classList.add("item-list");
            p.setAttribute('id', id);
            p.innerHTML = dados[i].nome
            cxLista.appendChild(p)
            id = id+1
        }
    }
    
}

inp.addEventListener("click", function(){
    if(num === 1){
      list.style.display="block"
      num = num+1
    }

    else if(num === 2){
      list.style.display="none"
      num = 1
    }

    
})

function favoritos() {
    var filter, li, a, i, txtValue;
    filter = inp.value.toUpperCase();
    li = list.getElementsByTagName('li');
  
  
    for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

/*Limpa todo o localstroage Favoritos*/
btnExcluir.addEventListener('click', () => {
    localStorage.removeItem('Favoritos');
    location.reload();
})

document.addEventListener('click', (e) => {
    if(e.target.className === 'list'){
        
        let txt = e.target.innerHTML

        let dados = JSON.parse(localStorage.getItem('Favoritos'))
    
        if(dados == null){
           dados = []
         }
    
        let lista = {nome: txt}
    
        dados.push(lista)
        localStorage.setItem('Favoritos', JSON.stringify(dados))
    
        location.reload();
    }

    if(e.target.className === 'item-list'){
       document.location.href = 'jogar.html'
    }
   
   
})


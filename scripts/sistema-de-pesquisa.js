let a = document.getElementById('pesquisar');
let b = document.getElementById('lista')
let n = 1

a.addEventListener("click", function(){
    if(n === 1){
        b.style.display="block"
        n = n+1
    }

    else if(n === 2){
        b.style.display="none"
        n = 1
    }
})

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('pesquisar');
  filter = input.value.toUpperCase();
  ul = document.getElementById("lista");
  li = ul.getElementsByTagName('li');


  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
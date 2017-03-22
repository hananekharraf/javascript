// on va changer l'objet className

//Identification de l'element
var runcheval = document.getElementById('runcheval').getElementsByTagName('div')
[0]
//on definit notre fonction jump
function jump (){
  console.log([runcheval]);
  runcheval.className= "jump"

  setTimeout( function(){
    runcheval.className = "run"
  }, 500)
}

//on utilise le eventlistner

runcheval.addEventListener("click" , jump )

console.log(runcheval)

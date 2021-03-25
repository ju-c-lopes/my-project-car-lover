
function iniciar(){
    var photo = []
    photo[0] = 'img/lamborghini.png'
    photo[1] = 'img/bugatti2.png'
    photo[2] = 'img/jaguar2.png'
    var carro = document.querySelector('img.carro')
    var txt = []
    txt[0] = 'Lamborghini'
    txt[1] = 'Bugatti'
    txt[2] = 'Jaguar'
    var texto = document.getElementById('lam')
    
    var ini = 1
    var fim = 3
  function mudar(){
    if(ini < fim){
      carro.src = photo[ini]
      texto.innerText = txt[ini]
      ini++
    }
    if (ini == fim) {
      ini = 0
    }
  }
  var time = setInterval(mudar, 6000)
}

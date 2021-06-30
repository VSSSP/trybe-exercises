function mudaTexto () {
let textoNovo = document.getElementsByTagName('p')[1]
textoNovo.innerText = 'Me vejo trabalhando em programação'
}
mudaTexto()

function mudarCor() {
  let cor = document.getElementsByClassName('main-content')[0];
  cor.style.background = "rgb(76,164,109)";
}
mudarCor();

function corzeta() {
  let cor = document.getElementsByClassName('center-content')[0]
  cor.style.background = 'white'
}
corzeta();

function corrigeTexto() {
  let texto = document.getElementsByTagName('h1')[0]
  texto.innerText = 'Exercicio 5.1 - JavaScript';
}
corrigeTexto();

function upCase () {
  let up = document.getElementsByTagName('p')[1]
  up.innerText = up.innerText.toUpperCase ()
}
upCase ()

function exibeTudo () {
  let exibe = document.getElementsByTagName('p')
  for (let key of exibe) {
    console.log (key.innerText)
  }
}

exibeTudo ()
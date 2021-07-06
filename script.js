const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy'); // já criou todas as constantes necessarias para fazer os exercicios


//  Copie esse arquivo e edite apenas ele;

//  Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function tiraOTech(evento) {
  techElement = document.querySelector('.tech'); // seleciona a classe tech
  techElement.classList.remove('tech'); // remove a classe tech 
  evento.target.classList.add('tech'); // no target, 
  input.value = '';

}

firstDiv.addEventListener('click', tiraOTech);
secondDiv.addEventListener('click', tiraOTech);
thirdDiv.addEventListener('click', tiraOTech);

//  Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

  input.addEventListener('input', function(evento1) {
    const techElement = document.querySelector('.tech');
    techElement.innerText = evento1.target.value

  })


//  Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 1. Que tal redirecionar para seu portifólio?

myWebpage.addEventListener('dblclick', function() {
  window.location.replace('http://vsssp.github.io/')
})

//  Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', function (evento2) {
  evento2.target.style.color = 'green';
})

myWebpage.addEventListener('mouseleave', function (evento2) {
  evento2.target.style.color = 'black'
})

myWebpage.addEventListener ('mouseover', function (event) {
  event.target.style.backgroundColor = 'white'
})

// Segue abaixo um exemplo do uso de event.target:


// function resetText(event) {
//   // O Event é passado como um parâmetro para a função.
//   event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
// }

firstDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
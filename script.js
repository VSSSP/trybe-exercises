const body = document.querySelector('body')
const element = document.createElement('h1')
body.appendChild (element)
document.querySelector('h1')[0].innerText = 'Exercício 5.2 - JavaScript'

const element = document.createElement('h1');
element.innerHTML = 'Exercício 5.2 - JavaScript DOM'; 
document.body.appendChild(element)

const element1 = document.createElement ('div') ;
element1.className = 'main-content'
document.body.appendChild(element1)

const element2 = document.createElement ('div') ;
element2.className = 'center-content';
element1.appendChild(element2)

const element3 = document.createElement('p');
element3.innerHTML = 'Algum texto qualquer'
element2.appendChild(element3)

const element4 = document.createElement('div');
element4.className = 'left-content' ;
element2.appendChild(element4)

const element5 = document.createElement('div');
element4.className = 'right-content' ;
element2.appendChild(element5)

const element6 = document.createElement ('div');
element6.className = 'small-image';
element6.src = 'https://picsum.photos/200'
element4.appendChild(element6)

const element7 = document.createElement('ul')
element5.appendChild(element7)
const lista = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let i of lista) {
  const element8 = document.createElement('li')
  element8.innerHTML = i
  element7.appendChild(element8)
}

const element9 = document.createElement('h3')
element1.appendChild(element9)

const element10 = document.createElement('h3')
element1.appendChild(element10)

const element11 = document.createElement('h3')
element1.appendChild(element11)

element.className = 'title'

element9.className = 'description'
element10.className = 'description'
element11.className = 'description'

const divRetirar = document.getElementsByClassName('left-content')[0]
element2.removeChild(divRetirar)

const margem = document.getElementsByClassName('right-content')[0];
margem.style.marginRight = 'auto';

const background = document.getElementsByClassName('center-content');
background.parentNode.style.backgroundColor = 'green'

element7.lastChild.remove()
element7.lastChild.remove()


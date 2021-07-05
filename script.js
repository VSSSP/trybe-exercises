// let pai = document.querySelector('#pai');
// let irmaoElemento = document.createElement('div');
// irmaoElemento.id = 'filhoElementoOndeVoceEsta'
// pai.appendChild(irmaoElementoOndeVoceEsta)

// console.log(irmaoElementoOndeVoceEsta)


// // irmão pro 'elemento onde vc esta'
// const pai = document.getElementById('pai');
// const irmaoElementoOndeVoceEsta = document.createElement('div');
// irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
// pai.appendChild(irmaoElementoOndeVoceEsta)
// // console.log(irmaoElementoOndeVoceEsta)
// ;
// // filho do elemento onde vc esta
// const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
// const filhoDoElemento = document.createElement('div')
// filhoDoElemento.id = 'filhoDoElemento'
// elementoOndeVoceEsta.appendChild(filhoDoElemento)
// // console.log (filhoDoElemento)

// const primeiroFilhodoFilho = document.getElementById('primeiroFilhodoFilho')
// const filhoMaisNovo = document.createElement('div')
// filhoMaisNovo.id = 'filhoMaisNovo'
// primeiroFilhodoFilho.appendChild(filhoMaisNovo)

// const body = document.querySelector('body')

// const element = document.createElement('h1')

// body.appendChild (element)

// document.querySelector('h1')[0].innerText = 'Exercício 5.2 - JavaScript'

const element = document.createElement('h1');
element.innerHTML = 'Exercício 5.2 - JavaScript DOM'; 
document.body.appendChild(element)

const element1 = document.createElement ('div') ;

element1.className = 'main-content'

document.body.appendChild(element1)
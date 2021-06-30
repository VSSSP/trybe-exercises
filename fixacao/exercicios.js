

// function verificaPalindromo (palavra) {
//   let palindromo = palavra.split('').reverse().join('');
//   if (palavra === palindromo) {
//     return true
//   } else {
//     return false
//   }
// }

// function verificaPalindromo2 (outraPalavra) {
//   let palindromo = outraPalavra.split('').reverse().join('');
//   if (outraPalavra === palindromo) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log (verificaPalindromo('arara'))
// console.log (verificaPalindromo2('desenvolvimento'))

// function arrayInteiros (array) {
//   let armazena = 0
//   for (let key in array) {
//     if (armazena < array[key]) {
//       armazena = key
//     }
//   }
//   return armazena
// }

// console.log (arrayInteiros([2, 3, 6, 7, 10, 1]))

// function menorNumero (menor) {
//   let armazene = 1
//   for (let key in menor) {
//     if (armazene > menor[key]) {
//       armazene = key
//     }
//   }
//   return armazene
// }

// console.log(menorNumero([2, 4, 6, 7, 10, 0, -3]))

// function nomeGrande (nome) {
//   let maiorNome = 'a'
//   for (let key in nome) {
//     if (nome.length > maiorNome.length) {
//       maiorNome = nome[key]
//     }
//   }
// return maiorNome
// }

// console.log (nomeGrande(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))


// exercicio 5 

// function repetido(numero) {
//   let repetido = 0;
//   let gravaNumero = 0;
//   let numero1 = 0;
//   for (let key in numero) {
//     let verificaNumero = numero[key];
//     for (let key2 in numero) {
//       if (verificaNumero === numero[key2]) {
//         gravaNumero += 1;
//       }
//     }
//     if (gravaNumero > repetido) {
//       repetido = gravaNumero;
//       numero1 = key;
//     }
//     numero1 = 0;
//   }
//   return numero[numero1]
// }

// console.log(repetido([2, 3, 2, 5, 8, 2, 3]));

// function somaTudo(numero) {
//   let numeroArmazenado = 0
//   for (let index = 0; index <= numero; index += 1) {
//     numeroArmazenado = index + numeroArmazenado
    
//   }
//   return numeroArmazenado
// }

// console.log (somaTudo(5))

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}; 

for (let index in car){
    console.log(car)
} // { model: 'A3 Sedan', manufacturer: 'Audi', year: 2020 }

for (let index in car){
    console.log(car[index])
}
//  A3 Sedan /  Audi / 2020

for (let index in car){
    console.log(index)
} // model / manufacturer / year
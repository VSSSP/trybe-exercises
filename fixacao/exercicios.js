

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

function nomeGrande (nome) {
  let maiorNome = 'a'
  for (let key in nome) {
    if (nome.length > maiorNome.length) {
      maiorNome = nome[key]
    }
  }
return maiorNome
}

console.log (nomeGrande(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
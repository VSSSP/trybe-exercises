

function verificaPalindromo (palavra) {
  let palindromo = palavra.split('').reverse().join('');
  if (palavra === palindromo) {
    return true
  } else {
    return false
  }
}

function verificaPalindromo2 (outraPalavra) {
  let palindromo = outraPalavra.split('').reverse().join('');
  if (outraPalavra === palindromo) {
    return true
  } else {
    return false
  }
}

console.log (verificaPalindromo('arara'))
console.log (verificaPalindromo2('desenvolvimento'))

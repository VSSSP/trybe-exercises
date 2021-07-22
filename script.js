// Exercicio 1

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!;`
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

// Exercicio 2

testingScope (true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
//E, claro, podemos simplificar bastante esse código.

// É possível trocar a função nomeada pra ser anônima. E trocar os três IFs por uma conta simples: a - b.

// Repare que o resultado dessa conta é sempre 0 se forem iguais, -1 se a é menor e 1 se b é menor. Exatamente o que precisamos.

// Juntanto tudo isso com a sintaxe de arrow functions do ES6 pra escrever menos, podemos simplesmente fazer:
// https://www.alura.com.br/artigos/ordenacao-de-numeros-no-javascript-nao-funciona?gclid=CjwKCAjwruSHBhAtEiwA_qCppna1lDasZKpWEcDrn61qsdt1HUQWyj0pj4uHzDccAstVRDgwv_dYnhoC-_cQAvD_BwE
oddsAndEvens.sort((a, b) => a - b);

console.log(oddsAndEvens);

// Exercicio 3

const fatorial = () => {
  let quatro = 4
  for (let i = 1; i <= 4; i += 1) {
    quatro *= i
  }
  return quatro
}
console.log (fatorial (5));
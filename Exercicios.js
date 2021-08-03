// const assert = require('assert');

// function foo() {
//   return 'bar';
// }

// assert.strictEqual(foo(), 'bar');

const assert = require('assert');

// concat cria um novo array unindo todos os elementos que foram passados como parâmetro, na ordem dada, para cada argumento e seus elementos (se o elemento passado for um array).
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flateen = arrays.reduce((acc, current) => acc.concat(current, []));

assert.deepStrictEqual(flateen, ['1', '2', '3', true, 4, 5, 6]);
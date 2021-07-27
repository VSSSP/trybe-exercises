// Testes Unitarios em JS

// como chamar o assert pra fazer os testes? 

const assert = require('assert');

const summationof = (number) => {
    let soma = 0
    for (let index = 1; index <= number; index += 1) {
        soma += index;
    }
    return soma
}

assert.strictEqual(typeof(summationof), 'function', 'Deu erro')
assert.strictEqual(summationof(1), 1);
assert.strictEqual(summationof(5), 15);

// THROW !!!!! TRATA EXCESSOES 

// começa o código fazendo ele falhar
// crie um algoritmo sustentável 
// const { assert } = require("console");

// Basicamente, existem três dimensões de qualidade que precisam ser consideradas: Confiança : O sistema é resistente a falhas durante a execução, isto é, não entra em loop , não interrompe a execução por falta de recursos. Funcionalidade : O sistema se comporta conforme o que foi definido em seus requisitos. Performance : O sistema tem um tempo de resposta adequado e aceitável, mesmo quando submetido a um volume de processamento próximo de situações reais ou de pico.
// 3, 1, 2
// questão 3???? V, F, V, F
// Essa alternativa está correta porque testes unitários são responsáveis por garantir a funcionalidade de um sistema, tanto no presente quanto no futuro, mas não necessariamente garantem o desempenho do sistema.
// F, V, V

// const assert = require('assert'); // Sintaxe para incluir o módulo assert

// assert.strictEqual(50, 50); // Sem erros: 50 == 50
// // assert.strictEqual(50, 70); // AssertionError: 50 == 70

// const assert = require('assert');

// function division(x, y) {
//   return x / y;
// }

// const expected = division(9, 3);

// assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três');
// esse metodo compara com === o primeiro e o segundo parametro, se falhar, mostra a mensagem escrita no terceiro parametro, este é opcional
// assert.equal faz a mesma coisa utilizando o == como comparador
// assert(expected === 3) teria o mesmo resultado

//assert.strictEqual()
// assert.deepStrictEqual()
// assert.notStrictEqual() verificação contraria
// assert.ok() Tests if value is truthy. It is equivalent to assert.equal(!!value, true, message).
// assert.fail()

// Varias checagens com vários metodos de assert <<

// const assert = require('assert');

// function add(a, b) {
//   return a + b;
// }

// const expected = add(1, 2);

// assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
// assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
// assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)

// Lançamento de erros e exceções <<
// THROW !!!!! TRATA EXCESSOES 
// ----------------------------------------------------------------

// const assert = require('assert');

// function division(x, y) {
//   if (y === 0) throw new Error('parameter y must not be 0'); <<<<<<<<<<<!!@!@#$!@$! com e maiusculo
//     // Queremos que o código retorne um erro com uma mensagem específica
//   // caso o parâmetro y seja 0. Por isso lançamos uma exceção se essa condição
//   // for verdadeira, o que irá interromper a execução da função.
//   return x / y;
// }

// assert.strictEqual(division(10, 2), 5); // OK
// assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK !!!!!!!!!
// ele espera que exista essa exceção  !!!!! tem que usar lá tb, testa se a exceção ta funcionando
// o teste é apenas um teste

// TEST DRIVEN DEVELOPMENT 

// Escrever um teste que cubra a função que você pretende implementar antes mesmo de executá-la. Este teste irá falhar - afinal, a sua função ainda não foi declarada. Você pode começar do teste mais elementar possível para esse cenário, como verificar se a função que você irá criar existe:

// assert.ok(true);
// assert.ok(false);
// assert.ok(1 != 1);
// a função assert.ok() só lança um erro se o primeiro argumento passado a ela for o equivalente ao booleano false.

// const sum = (value1, value2) => value1 + value 2
// numero em string contatena com numero number

// if (typeof(parametro) !== 'number')

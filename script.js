// Spread

// Funciona como um push, porém, não altera o array original

// E não para por aí! Você verá que o spread pode ser utilizado para combinar objetos e arrays, para copiar valores de objetos iteráveis, e em funções que recebem múltiplos argumentos.

// Juntando arrays em outro lugar
const carros = ["gol", "hb20", "fusca"];
const motos = ["biz", "hornet"];

const veiculos = [...carros, ...motos];
console.log(veiculos);

// Juntando objetos em outro lugar
const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: false,
};
const pessoa = {
  nome: "Victor",
  idade: "28",
  cidade: "bh",
};

const pessoaTryber = {
  ...conhecimentosTrybe,
  ...pessoa,
};

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800 // ja mostra o maior numero do array
console.log(Math.min(...randomNumbers)); // 5 // o menor

// Faça uma lista com as suas frutas favoritas
const specialFruit = ["odeio", "qualquer", "fruta"];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ["sorvete", "chocolate", "pizza"];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));

// Rest

// o parâmetro rest "empacota" todos os argumentos em um array,

const sum = (...args) =>
  args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60, 100, 91231, 900)); // 88 // Posso passar quantos parametros eu quiser

function quantosParams(...args) {
  console.log("parâmetros:", args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams("string", null, [1, 2, 3], {})); // Você passou 4 parâmetros para a função.

// Object Destructuring

// Extrai valores de um objeto

const product = {
  name: "Smart TV Crystal UHD",
  price: "1899.05",
  seller: "Casas de Minas",
};
const { name, seller } = product; // Extrai name e seller de product
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

const student = {
  a: "Maria",
  b: "Turma B",
  c: "Matematica",
};

const { a: name, b: classAssigned, c: subject } = student; // troca o nome da chave utilizando o nomeatual: novoNome dentro da chave = Objeto

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

//   Por fim, uma outra situação que podemos usar a desestruturação de objetos é quando queremos passar os valores de um objeto como parâmetros para uma função, como no exemplo abaixo:

const product = {
  name: "Smart TV Crystal UHD",
  price: "1899.05",
  seller: "Casas de Minas",
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// Array destructuring

// Mesma ideia do object destructuring, porém em arrays

// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

// const firstCountry = arrayCountries[0];
// const secondCountry = arrayCountries[1];
// const thirdCountry = arrayCountries[2];
// const fourthCountry = arrayCountries[3];

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada  // Jeito antigo de imprimir cada elemento do array

const arrayCountries = ["Brazil", "Japan", "China", "Canada"];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] =
  arrayCountries;
// deu um nome para cada posicao do index do array

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada  // Utilizando Array Destructuring

const saudacoes = ["Olá", (saudacao) => console.log(saudacao)];

const [primeiro, segundo] = saudacoes;
console.log(primeiro);

let comida = "gato";
let animal = "água";
let bebida = "arroz";

[comida, animal, bebida] = [bebida, comida, animal]; // transforma as variaveis de uma vez
console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[, , , ...numerosPares] = numerosPares; // Qual a função das três virgulas? <

console.log(numerosPares); // [6, 8, 10, 12];

// Default Destructuring

// Insere propriedade que ainda não existe no objeto, também adiciona valores em uma posição inexistente do array

const person = {
  name: "João",
  lastName: "Jr",
  age: 34,
};

const { nationality = "Brazilian" } = person; // Adiciona nacionality com valor brazilian
console.log(nationality); // Brazilian

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0 // Add valores no array

// Fix 

const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const { nationality = "Brazilian" } = person;

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
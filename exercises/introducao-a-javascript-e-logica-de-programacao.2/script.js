let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 0) {
    higherNumber += 1;
  }
}

console.log (higherNumber)

if (higherNumber === 0) {
  console.log('nenhum valor impar encontrado')
}
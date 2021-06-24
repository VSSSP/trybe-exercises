let nota = 45

if (nota >= 90) {
  console.log ('A');
}
else if (nota >= 80) {
  console.log ('B');
}
else if (nota >= 70) {
  console.log ('C');
}
else if (nota >= 60) {
  console.log ('D');
}
else if (nota >= 50) {
  console.log ('E');
}
else if (nota < 0 || nota > 100) {
  console.log ('Erro, nota maior que 100 ou menor que 0')
}
else {
  console.log('F')
}
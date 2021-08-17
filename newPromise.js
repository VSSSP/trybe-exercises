// const promise = new Promise((resolve, reject) => {

// }); // sintaxe

// const promise = new Promise((resolve, reject) => {
//     const number = Math.floor(Math.random() * 11);
  
//     if (number <= 5) {
//       return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
//     }
//     resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
//   });

  // Reject e resolve funcionam como um return, porém não break a function

// A promise tem 3 estados. Pending , Fulfilled e Rejected . Quando a Promise é executada, ela entra automáticamente no estado Pending . Aqui é quando ela sai da fila e vai para sua "área especial". Ao retornar, ela pode apresentar um dos 2 estados: Fulfilled , se ocorreu tudo certo com sua execução ou Rejected , se ocorreu algum erro. É aqui que nossos parâmetros resolve e reject entram.

// const promise = new Promise((resolve, reject) => {
//     const number = Math.floor(Math.random() * 11);
  
//     if (number <= 5) {
//       return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
//     }
//     resolve(number);
//   })
//   .then(number => `Que sucesso =) nosso número foi ${number}`)
//   .then(msg => console.log(msg));

// Aqui demonstramos 2 coisas importantes sobre a sintaxe do .then() :
// Passamos como argumento uma função. Essa função também recebe 1 argumento que é o retorno do resolve da nossa promise.
// O .then() é usado "em cadeia", um conceito chamado de chaining . Assim, podemos colocar vários .then() em cadeia, e o argumento da função interna de um será o retorno do anterior. A parte mais importante é que o .then() espera a promise (ou o .then() anterior) ser concluída para começar a sua execução. Assim, nosso fluxo está controlado!

// const promise = new Promise((resolve, reject) => {
//     const number = Math.floor(Math.random()* 11);
  
//     if (number <= 5) {
//       return reject(number);
//     }
//     resolve(number);
//   })
//   .then(number => `Que sucesso =) nosso número foi ${number}`)
//   .then(msg => console.log(msg))
//   .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

//   Se executarmos o código acima, vamos ver que o erro anterior desapareceu, pois agora ele foi tratado! Assim como o .then() recebe o retorno de resolve , o .catch() recebe o retorno do reject , que é passado para ele como argumento de sua função interna. Assim, quando a promise retorna um reject , pula todos os .then() e executa o primeiro .catch() que encontrar. E tem mais! O .catch() também "pega" qualquer erro que acontecer dentro de qualquer .then() anterior a ele. Por esse motivo é geralmente usado no final.

// const fetch = require('node-fetch');

// function verifiedFetch(url) {
//   return new Promise((resolve, reject) => {
//     if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//       fetch(url)
//         .then((r) => r.json())
//         .then((r) => resolve(r.value));
//     } else {
//       reject(new Error('endpoint não existe'));
//     }
//   });
// }

const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");

// Agora execute a função sendJokeToFriend e veja se você acertou. Como vemos, recebemos o seguinte log: Promise { <pending> } . Vamos ver o que acontece aqui. Como vimos, verifiedFetch é uma promise, logo, é assíncrono. Quando o javascript executa a função, ele manda ela para "área especial" e passa para próxima função que é o console. Como a promise ainda não voltou com o conteúdo de message , vemos que a promise ainda está no estado pending . Para visualizar ainda melhor, retire o fetch e execute um resolve que retorna qualquer valor, assim a promise terminará sua execução imediatamente. Antes de executar, pense: Agora que a promise resolve imediatamente, quando o console.log for executado a Promise estará em pending ou já terá um resultado ? Execute e veja a resposta.
// {/* Como você viu, ela esta em pending, mesmo sendo resolvida imediatamente. Isso aconteceu pois, mesmo resolvendo na hora, a promise vai para sua área e sai da fila. Quando ela retorna, mesmo que de imediato, ela volta pro final da fila e o console.log está na frente, sendo executado primeiro. Para resolver esse problema existem 2 maneiras. A primeira é usar o fluxo da promise e colocar o console.log dentro do .then() . Essa solução e ótima, mas pode ficar dificil de se manter e ler a medida que o número de passos aumenta e a medida que cada passo fica mais complexo também, assim, surgiu a terceira evolução das promises, o async e o await ! */}
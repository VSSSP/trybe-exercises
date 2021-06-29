// para fazer o ataque na linha (rainha e peça alvo no mesmo lugar )
//posicao da rainha
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

//posicao peca alvo
let posicaoPecaLinha = 4;
let posicaoPecaColuna = 7;

let ataqueBemSucedido = false; // aqui posso iniciar com essa premissa 

if (posicaoRainhaLinha === posicaoPecaLinha) {
    ataqueBemSucedido = true;
};
console.log(ataqueBemSucedido); // true

// para atacar na vertical OU na horizontal - duas verificações em condicionais com OU
if (posicaoRainhaLinha === posicaoPecaLinha || posicaoRainhaColuna === posicaoPecaColuna) { 
    ataqueBemSucedido = true;
  };

//Diagonal superior direita

for (let supDir = 1; supDir < 8; supDir += 1) { // declarada supDir = posição 1, de onde a rainha parte // ela pode ir de 1 até 8
    // ou seja menor que 8, vai de um em um até 7. Desse jeito consigo movimentar a peça. 
    let linhaRainha = posicaoRainhaLinha + supDir;  // td vez que ela(rainha) se movimenta, a gente precisa trocá-la de lugar.
    // variável que recebe a posição atual da rainha (posiçãoRainha) + supDir. Toda vez que há um repetição a rainha vai andando 
    // mais uma casa, e assim aumentando o valor da variável linhaRainha. Aqui estamos conseguindo aumentar a linha da rainha.
    // como estamos andando na diagonal, a gente n pode declarar apenas a linha temos que alterar tb a coluna:
    let colunaRainha = posicaoRainhaColuna + supDir;
  // assim toda vez que o for é executado a gente aumenta uma linha e aumenta uma coluna.
  // agora a gente precisa checar se está na mesma linha e na mesma coluna, a cada movimentação que a rainha faz, para isso if:
  if (posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna === colunaRainha)) { // para verificar se ta na mesma linha e coluna; 
  ataqueBemSucedido = true; // se essa verificação acima acontecer (&&), o meu ataque será bem sucedido
}
let posicaoRainhaLinha = 6;
let posicaoRainhaColuna = 6; // aqui seria true. 

let posicaoRainhaLinha = 8;
let posicaoRainhaColuna = 6; // aqui seria false. 

// acima nada impede que a contagem continue quando altero as posições (como por ex 9) pq meu supDir vai tá incrementando +1, 
// ele vai fazer isso até andar 7 posições. Mas se for 16/16 na posição peça linha/peça coluna da false, pq extrapolei meu for 
// que é de 7posições, para resolver isso, crio mais uma verificação (if):
// if (linhaRainha > 8 || coluna > 8 ) break; // ta fora no tabuleiro minhas peças e dai eu breko.
//  Faço essa verificação lá em cima (pq se ela é breakada, não tem pq seguir com o programa). Fica assim o cód: 

for (let supDir = 1; supDir < 8; supDir += 1) { 
    let linhaRainha = posicaoRainhaLinha + supDir;  
    let colunaRainha = posicaoRainhaColuna + supDir;
    if (linhaRainha > 8 || colunaRainha > 8) {
      break;
    };
    if ((posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna === colunaRainha)) {
    ataqueBemSucedido = true;
    };
};
  // então no cód acima se a posição é 9 já vai dá false na primeira verificação. 


  /* 
//posicao peca alvo
let posicaoPecaLinha = 3;
let posicaoPecaColuna = 4;

let ataqueBemSucedido = false;

if (posicaoRainhaLinha === posicaoPecaLinha || posicaoRainhaColuna === posicaoPecaColuna) {
  ataqueBemSucedido = true;
};

//Diagonal superior direita
for (let supDir = 1; supDir < 8; supDir += 1) {
  let linhaRainha = posicaoRainhaLinha + supDir;
  let colunaRainha = posicaoRainhaColuna + supDir;

  if (linhaRainha > 8 || colunaRainha > 8) {
    break;
  };

  if ((posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna === colunaRainha)) {
    ataqueBemSucedido = true;
  };
};

//Diagonal superior esquerda
for (let supEsq = 1; supEsq < 8; supEsq += 1) {
  let linhaRainha = posicaoRainhaLinha + supEsq;
  let colunaRainha = posicaoRainhaColuna - supEsq;

  if (linhaRainha > 8 || colunaRainha < 1) {
    break;
  };

  if ((posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna === colunaRainha)) {
    ataqueBemSucedido = true;
  };
};

//Diagonal inferior esquerda
for (let infEsq = 1; infEsq < 8; infEsq += 1) {
  let linhaRainha = posicaoRainhaLinha - infEsq;
  let colunaRainha = posicaoRainhaColuna - infEsq;

  if (linhaRainha < 1 || colunaRainha < 1) {
    break;
  };

  if ((posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna === colunaRainha)) {
    ataqueBemSucedido = true;
  };
};

//Diagonal inferior direita
for (let infDir = 1; infDir < 8; infDir += 1) {
  let linhaRainha = posicaoRainhaLinha - infDir;
  let colunaRainha = posicaoRainhaColuna + infDir;

  if (linhaRainha < 1 || colunaRainha > 8) {
    break;
  };

  if ((posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna === colunaRainha)) {
    ataqueBemSucedido = true;
  };
};


console.log(ataqueBemSucedido);
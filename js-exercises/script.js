let pecaXadrez = 'Peão'

switch (pecaXadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei anda apenas uma casa pra qualquer lugar');
    break;
  case 'rainha':
    console.log('A rainha anda para qualquer direção e quantas casas quiser');
    break;
  case 'bispo':
    console.log('O bispo pode andar para quantas casas quiser, apenas pelas diagonais')
    break;
  case 'peão':
    console.log('O peão só anda pra frente, exceto na primeira rodada que podera andar duas casas. Ele só mata pelas diagonais da frente')
    break;
}
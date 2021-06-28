let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem vinda,', info.personagem)

info.recorrente = 'Sim'

console.log(info)


let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four color Comics #178',
  nota: 'O ultimo MacPatinhas',
  recorrente: 'Sim'
};


for (let key in info) {
    if (key === 'recorrente' && info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
      console.log ('Ambas Recorrentes')
    } else {
      console.log (info[key], 'e', info2[key])
    }
  }

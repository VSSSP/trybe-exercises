function danese() {
    const fodas = {
        fodas: 'fodas',
        aia: 'fodasi',
        teste: 'dosTestes'
    }
    return fodas
}
console.log(Object.keys(danese()))

// Object.keys (objeto) é uma nova maneira de exibir as chaves, como se fosse um for in

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

console.log(Object.keys(student1))

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student); // html, css etc
    for (index in arrayOfSkills) {
        console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

// OBJECT.VALUES (OBJ)

const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
    const skills = [];
    for (skill in student) {
        skills.push(student[skill]);
    }

    return skills;
};
// toda a função acima pode ser escrita em apenas uma linha utilizando object.values
const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));

// Resumindo até aqui, object.keys retorna as chaves do objeto e object.values retorna os valores do objeto.

// object.entries 

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

// Esse método, retorna um array contendo uma chave, com seu valor de cada vez. 
// retorna:
// [ [ 'França', 'Paris' ],
//   [ 'Brasil', 'Brasília' ],
//   [ 'Espanha', 'Madrid' ],
//   [ 'Portugal', 'Lisboa' ] ]
// [['chave', 'valor']]

// object.assign 

const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person)
  
  /* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */

    // método para adicionar um objeto no outro. o primeiro parametro sempre é o objeto de destino, e os outros são quais objetos eu irei adicionar ali. sobrescrevendo os que tiverem a mesma chave, exemplo do age

    
const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  newPerson.lastName = 'Haroldo'
  console.log(newPerson);
  console.log(person);

  // nesse caso se cria um novo objeto, clon
// Objetivo calcular a media de notas dos alunos abordando uma maneira imperativa e outra declarativa

const alunos = [
  {nome: 'Rafael', nota: 7.3, bolsista: false},
  {nome: 'James', nota: 9.5, bolsista: true},
  {nome: 'Ana', nota: 7.3, bolsista: false},
  {nome: 'Sophie', nota: 10.0, bolsista: false},
  {nome: 'Scott', nota: 8.3, bolsista: true},
];

// Imperativo
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);


// Declarativo - Abordagem mais interessante
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;
// e ainda podemos estar reutilizando as funções criadas getNota e soma

const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);
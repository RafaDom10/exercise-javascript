// Metodo reduce: aplica cumulativamente uma função aos elementos de uma coleção

const alunos = [
  {nome: 'Rafael', nota: 7.3, bolsista: false},
  {nome: 'James', nota: 9.5, bolsista: true},
  {nome: 'Ana', nota: 7.3, bolsista: false},
  {nome: 'Sophie', nota: 10.0, bolsista: false},
  {nome: 'Scott', nota: 8.3, bolsista: true},
];

// extraindo apenas as notas dos alunos com o map e em sequencia aplicando o reduce
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
  console.log(acumulador, atual);
  return acumulador + atual;
}, 0);
console.log(Math.ceil(resultado));
// simplificando
const resultado2 = alunos.map(a => a.nota).reduce((acu, atu) => acu + atu);
console.log(Math.ceil(resultado2));



// Exemplo criando uma função reduce para determinar alunos bolsistas ou não
const todosBolsistas = (result, bolsista) => result && bolsista; // se todos são bolsista
const algumBolsistas = (result, bolsista) => result || bolsista; // se algum é bolsista

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas));
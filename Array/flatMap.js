const escola = [{
  nome: 'Turma M1',
  alunos: [{
    nome: 'Gustavo',
    nota: 8.5
  }, {
    nome: 'Ana',
    nota: 9.5
  }]
}, {
  nome: 'Turma M2',
  alunos: [{
    nome: 'Rebecca',
    nota: 10.0
  }, {
    nome: 'James',
    nota: 8.9
  }]
}];

const getNotaDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);

// Criando o flatMap() (não existe na API padrão) flatMap -> juntar todas as notas em um unico array e não, em um array de arrays como foi feito acima
Array.prototype.flatMap = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback));
};

const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);
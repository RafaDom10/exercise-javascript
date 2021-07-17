// Usando notação literal de objetos
const obj1 = {}
console.log(obj1);


// Segunda forma de criar objetos
const obj2 = new Object;
console.log(obj2);


// Criando obj com uma função construtora
function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2999.99, 0.25);
console.log(p1.getPrecoComDesconto().toFixed(2), p2.getPrecoComDesconto().toFixed(2));


// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    }
  }
}

const funcionario1 = criarFuncionario('Rafael', 8000.00, 5);
const funcionario2 = criarFuncionario('Ana', 10000.00, 7);

console.log(funcionario1.getSalario().toFixed(2), funcionario2.getSalario().toFixed(2));


// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);


// Função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);

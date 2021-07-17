// coleção dinâmica de chave e valor

const produto = new Object;

// adicionando atributos ao obj
produto.nome = "Cadeira";
produto['marca do produto'] = 'Generica' // outra forma de adicioonar atributos, porém não muito usual
produto.preco = 220;

console.log(produto);

// deletando atributos

delete produto.preco;
delete produto['marca do produto'];

console.log(produto);


// Criando obj um pouco mais complexo

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  // array de obj condutores
  condutores: [{
    nome: 'Junior',
    idade: 19
  }, {
    nome: 'Ana',
    idade: 42
  }],
  // função dentro do obj carro
  calcularValorSeguro: function() {

  }
};

console.log(carro);

// acessando valores e modificando 

console.log('----------------------------------------------------')

carro.proprietario.endereco.numero = 1000;
carro.proprietario.endereco.logradouro = 'R. Augusto Cavalcanti';

console.log(carro);

// deletando atributos
console.log('-----------------------------------------------------')

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;

console.log(carro);

// acessando atributos inexistente

console.log(carro.condutores); // não ira gerar um erro apenas retornara undefined
// porém se tentarmos acessar algo que esta com undefined, irá gerar um erro
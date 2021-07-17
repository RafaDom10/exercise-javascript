// ES8: Object.values/ Object.entries

const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }
console.log(Object.values(object)); // terá a saida de todos e somente os valores do obj
console.log(Object.entries(object)); // retornara um array de arrays contendo chaves e valores


// Melhorias na Notação Literal de um obj
const nome = 'Rafael';

const objeto = {
  nome,  // com a melhoria não é nessesario indicar o valor se for o mesmo nome da variavel
  soma() {
    return 1 + 3;
  } // funções tambem podem ser simplificada sem a necessidade da palavra function soma: function() {}
}


// class

class Animal {}

// extends para ter herança
class Dog extends Animal {
  latir() {
    return 'Au, Au!!';
  }
}

console.log(new Dog().latir()); // criando nova instância para acessar metódos difinidos dentro da classe
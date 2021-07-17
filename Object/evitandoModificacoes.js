// Object.preventExtensions não permite extenções do objeto (adicionar atributos)

const produto = Object.preventExtensions({
  nome: 'Qaulquer', preco: 1.99, tag: 'promoção'
});

console.log('Extensível', Object.isExtensible(produto));  // false -> não é extensível

produto.nome = 'Borracha'; // permite a modificação, diferente do freeze que não permite
produto.descricao = 'Borracha escolar branca'; // não permite
delete produto.tag; // permite deletar
console.log(produto);


// Object.seal -> não consegue adicionar atributos, não consegue excluir, mas conseguimos modificar os valores
const pessoa = { nome: 'Juliana', idade: 20 }
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa)); // -> true

console.log(pessoa);

pessoa.sobrenome = 'Silva'; // não conseguimos adicionar novo atributos
delete pessoa.nome; // não conseguimos deletar
pessoa.idade = 29; // podemos modificar
console.log(pessoa);


// Object.freeze = selado + valores constantes
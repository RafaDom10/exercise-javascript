const pessoa = {
  nome: 'Rafael',
  idade: 29,
  peso: 100
}

console.log(Object.keys(pessoa)); // acessando somente as chaves
console.log(Object.values(pessoa)); // acessado somente os valores
console.log(Object.entries(pessoa)); // gera um array de array cotedo chave e valor


// Percorrendo com for each o array de arraies

Object.entries(pessoa).forEach(element => {
  console.log(`${element[0]}: ${element[1]}`);
});

// o mesmo exemplo usando destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});


// Outro método

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019'
});

pessoa.dataNascimento = '01/02/2020';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));


// Object.assing (ECMAScript 2015) pega atributos de um obj e passa para outro obj de destino
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);  // atributos com a chave do mesmo valor seram subscritos
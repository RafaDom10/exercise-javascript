// diferenças de notação JSON para Objeto

// Criando um obj e convertendo para json
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } };
console.log(JSON.stringify(obj));  // a função é excluida do json, porque o json é um formato de dados e não de execução


// JSON para Objeto
// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"));  -> formato inválido
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"));  -> formato inválido
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));  // FORMARO VÀLIDO
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'));  // FORMARO VÀLIDO
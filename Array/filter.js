// Método filter() irá filtra o array por determinado parâmetro

const products = [
  {name: 'MacBook Pro', price: 3000.00, fragile: true},
  {name: 'Ipad', price: 2900.00, fragile: true},
  {name: 'Mirror', price: 59.00, fragile: true},
  {name: 'Hammer', price: 10.00, fragile: false},
  {name: 'Table', price: 120.00, fragile: false}
];

// utilizando a o metodo filter()
console.log(products.filter(function(p) {
  return p.price > 2000;
}));
// versão simplificada
console.log(products.filter(p => p.price > 2500));
// guarda em uma nova variavel, criando um novo array de produtos fragil
const fragileFalse = products.filter(p => p.fragile === false);
console.log(fragileFalse);

// Podemos tambem passar funçoes como parametro para o filter
const expensive = product => product.price >= 1000.00;
const fragile = product => product.fragile === true;
// criando novos arrays
const expensiveProducts = products.filter(expensive);
const fragileProducts = products.filter(fragile);
// imprimindo
console.log(expensiveProducts);
console.log(fragileProducts);
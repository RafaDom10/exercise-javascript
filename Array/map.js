// Utilizando o metodo map(), map é como um for porem ele transforma os elementos
// O map() não transforma o array atual e sim gera um novo array

const nums = [1, 2, 3, 4, 5];

// Criando uma várial com o resultado do map sobre um array nums
let result1 = nums.map(function(n) {  // neste caso o map() pega cada elemento do array e multiplica por 2
  return n * 2;
});
// versão mais simplificada
let result2 = nums.map(n => n * 2);

console.log(result1,' - ', result2);


// Funções para serem passadas como parametros(callback) para o map()
const sum10 = n => n + 10;
const triple = n => n * 3;
const forMoney = n => `$ ${parseFloat(n).toFixed(2)}`;

const result3 = nums.map(sum10).map(triple).map(forMoney); // podemos usar varios maps encadeados
console.log(result3);


// OUTRO EXEMPLO
const shoppingCart = [
  '{"name": "Playstatio 5", "price": 499.00}',
  '{"name": "Xbox Series X", "price": 499.00}',
  '{"name": "Nba 2k21", "price": 69.00}',
  '{"name": "Cyberpunk 2077", "price": 59.00}',
  '{"name": "Assassin\'s Creed Valhala", "price": 59.00}',
];

// Retornar um array com apenas os preços dos dados em formato JSON
// passo 1 converter o json para obj
// criando as funções para usar no map
const forObject = json => JSON.parse(json);
const onlyPrice = product => product.price;

// passo 2 aplicando o map e usando as funções criadas
const resultPrice = shoppingCart.map(forObject).map(onlyPrice).map(p => p.toFixed(2));
console.log(resultPrice);
// Método concat concatena elementos, não afetara os elementos originais

const filhos = ['José', 'James'];
const filhas = ['Maria', 'Ana'];

// usando o concat para formar um novo array
const todosFilhos = filhos.concat(filhas);
console.log(todosFilhos);
console.log(filhas);
console.log(filhos);

// tambem podemos adicionar mais elementos na hora da concat
const todosFilhos2 = filhos.concat(filhas, 'Teste');
console.log(todosFilhos2);
console.log(filhas);
console.log(filhos);

// concatenando varios elementos em um array vazio
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));
console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]));
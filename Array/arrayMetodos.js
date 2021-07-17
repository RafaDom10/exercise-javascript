// MÉTODOS IMPORTANTES COM ARRAYS

const players = ['Jordan', 'LeBron', 'Bird', 'Iverson', 'O\'neal'];
console.log(players);

// Metodo pop() -> Remove o ultimo elemnto do array
players.pop(); // 0'neal foi removido
console.log(players);

// Método push() -> adiciona um elemento na ultima posição do array
players.push('Johson');
console.log(players);

// Método shift() -> remove um elemento da primeira posição
players.shift();
console.log(players);  // jordan foi removido

//Método unshift() -> Adiciona um novo elemento na primeira posição do array
players.unshift('Wade');
console.log(players);

// Método splice() -> adiciona e remove elementos
// Adicionando
players.splice(2, 0, 'Zion', 'Harden'); // adicionar no indice -> 2, remover elementos -> 0, e adicionar zion e harden ao array
console.log(players);
// Removendo
players.splice(3, 1); // no indice 3 remover 1 elemento
console.log(players);

// Método slice -> 'corta' o array (pegar um pedaço)
const players2 = players.slice(2); // criara um novo array apartir do elemento de indice 2
console.log(players2);
// outra forma
const players3 = players.slice(1, 5); // criara um novo array apartir do elemento indice 1 até 4, o elemento final não entrara no array
console.log(players3);

// Array é um objeto, e ele organiza os seus dados apartir de um index comecando em 0, é dinâmico

console.log(typeof Array, typeof new Array, typeof []); // 1.function 2.object 3.object


// Criando um array
let aprovados = new Array('Bia', 'Carlos', 'Ana');  // new Array não é a maneira recomendada

aprovados = ['Bia', 'Carlos', 'Ana']; // Maneira literal, mais recomendada


// Acessando elementos
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);


// Adicionado novos elementos
aprovados[3] = 'Rafael';  // maneira mais comum para substituir um elemento
aprovados.push('Carol');  // adiciona um elemento no final do array

console.log(aprovados);
console.log(aprovados.length);  // verificar o tamanho do array

aprovados.sort(); // ordena o array e altera oo original
console.log(aprovados);

// Deletando
delete aprovados[0];

//Deletando com splice
aprovados.splice(1, 1); // no indice 1 deletar 1 elemento
aprovados.splice(1, 2); // apartir do indice 1 deletar 2 elementos
// adicionando e removendo
aprovados.splice(1, 2, 'pessoa1', 'pessa2'); // apartir do indice 1 deletar 2 elementos e , adicionando pessoa' e pessoa2

console.log(aprovados);
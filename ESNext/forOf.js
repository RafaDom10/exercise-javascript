// Iterando com o for of

// string
for (let letra of "Rafael") {
  console.log(letra);
}


//Array
const array = ['rafael', 'ana', 'carolina', 'sophie'];
// percorre os valores
for (let n of array) { console.log(n); };
// percorre os indices
for (let n in array) { console.log(n); };


//Map
const assunstosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }]
]);
// percorrendo o Map 
for (let assunto of assunstosMap) {
  console.log(assunto);
}
// percorrendo o Map e extraindo apenas as chaves
for (let chave of assunstosMap.keys()) {
  console.log(chave);
}
// percorrendo o Map e extraindo apenas os valores
for (let valor of assunstosMap.values()) {
  console.log(valor);
}
// percorrendo o Map e extraindo as entradas 'entries'
for (let [chave, valor] of assunstosMap.entries()) { // destructuring desestruturando chave e valor [chaves, valor]
  console.log(chave);
  console.log(valor);
}


// Set
const s = new Set([ 'a', 'b', 'c']);
for (let letra of s) {
  console.log(letra);
}
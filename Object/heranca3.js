// definindo um obj para ser o pototype
const pai = { nome: 'Pedro', corCabelo: 'preto' };

const filha1 = Object.create(pai);  // ja fazendo o apontamento para o pai como o prototype do obj filha1
filha1.nome = 'Ana'; // sobrescrevendo o atributo nome (shadowing)

const filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true } // outra maneira de definar prototype e ja setar alguns atributos mais completos como  oo atributo nome ser ou não possivel rescever e etc..
});

console.log(filha2.nome); // -> Bia

filha2.nome = 'Carol'; // sera ignorado pois o atributo writable esta como false

console.log(`${filha2.nome} tem cabelos ${filha2.corCabelo}`);


console.log('-----------------------------------------------------------');

// Percorrendo todos os atributos do obj

for (let key in filha2) {
  console.log(key);
}


console.log('-----------------------------------------------------------');


// Fazendo um teste e percorrendo um obj para saber o que de fato é dela e o que foi passado de herança do prototype

for (let key in filha2) {
  filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`);
}
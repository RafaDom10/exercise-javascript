// A constante passa apontar pra o endereço em que esta o obj, por isso é permitido alterar atributos do mesmo
// pessoa -> 123 -> {...}

const pessoa = { nome: 'Rafael' };
console.log(pessoa.nome);

pessoa.nome = 'Ana';  // operação permitida
console.log(pessoa.nome);

// Porém há um metodo pra tornar um obj imutavél/constante

Object.freeze(pessoa);

pessoa.nome = 'Maria';
pessoa.end = 'Rua abc';
delete pessoa.nome;
// Qualquer alteração não sera executada, será ignorada

console.log(pessoa.nome);

// Criando um obj imutavél

const pessoaConstante = Object.freeze({
  nome: 'Rafael'
});

console.log(pessoaConstante.nome);
console.log(pessoaConstante);

// desta forma nem a referencia nem o objeto pode ser mudado
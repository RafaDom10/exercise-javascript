// Operador ... rest(juntar)/ spread(espalhar)
// usar rest com parâmetro de função - podendo adicionar quantos parametros quiser

// usar spread com objeto
const funcionario = { nome: 'Rafael', salario: 5000.00 };
const clone = { ativo: true, ...funcionario }; // o objeto clone tera todas as propriedades do obj funcionario
console.log(clone);
console.log(funcionario);

// usar spread com array
const grupoA = [ 'Rafael', 'Carol', 'Soso'];
const grupoB = [ 'Scott', ...grupoA]; // o mesmo efeito do obj
console.log(grupoA);
console.log(grupoB);
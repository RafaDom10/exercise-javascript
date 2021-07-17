// Função - Função Arrow

// Arrow function
// função normal 'antiga'
function soma1(a, b) {
  return a + b;
}
// A mesma função escrita com o metodo arrow function, e return implicito
const soma2 = (a, b) => a + b; // arrow function sempre sera uma funnção anonima atribuida á uma variável
// caso a função arrow tiver um corpo, obrigatoriamente tera que ter return
const soma3 = (a, b) => {
  return a + b;
};


// Parametro default
function log(text = "node") {
  console.log(text);
}

log('Rafal');
log(); // por default -> node sera exibido


// Operador rest - transforma varios parametros em um array
function total(...args) {
  let total = 0;
  args.forEach(a => total += a);
  return total;
}
console.log(total(1, 2, 3, 4, 5));
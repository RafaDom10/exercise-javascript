
const ferrari = {
  modelo: 'f40',
  velMax: 324
};

const volvo = {
  modelo: 'v40',
  velMax: 200
};
// __proto__ -> acessa os atributos do pai
// criação literal de objeto sempre apontará para o Object.prototype

console.log(ferrari.__proto__);  // acessar o prototype ('pai' -> herança) do obj ferrari

console.log(ferrari.__proto__ === Object.prototype);  // verificação de igualdade

console.log(Object.prototype.__proto__);  // Object.prototype.__proto__ -> null ou seja oo bject.prototype é o proto de mais alto nível
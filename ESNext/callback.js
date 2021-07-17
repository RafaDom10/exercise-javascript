/* Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

Aqui está um pequeno exemplo: */

function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  let name = prompt('Please enter your name: ');
  callback(name);
}

processUserInput(greeting);
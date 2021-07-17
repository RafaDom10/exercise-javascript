// O Objeto Map é um mapa simples de chave/valor. Qualquer valor (objeto e valores primitivos) pode ser usado como uma chave ou valor.

// exemplos

const myMap = new Map();

let keyString = 'uma string', keyObject = {}, keyFunction = function() {};

// configurando os valores

myMap.set(keyString, "valor associado com 'uma string'");
myMap.set(keyObj, "valor associado com keyObj");
myMap.set(keyFunc, "valor associado com keyFunc");

myMap.size;

// Obtendo os valores
myMap.get(keyString);
myMap.get(keyObj);
myMap.get(keyFunc);
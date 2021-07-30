// * Transformando a leitura de um arquivo em promise

const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname, 'data.txt');

function read(readPathFile) {
  return new Promise((resolve) => {
    fs.readFile(readPathFile, (_, content) => {
      resolve(content.toString())
    });
  });
}

read(pathFile).then(name => console.log(name));
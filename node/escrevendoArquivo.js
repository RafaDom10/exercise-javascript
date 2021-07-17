/* 
// Escrevendo arquivos com o module cor do node fileSystem

const fs = require('fs');

const produto = {
  nome: 'Celular',
  preco: 4999.99,
  desconto: 0.15
}

// transformar o obejeto em json e ai sim gravar em disco 

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
  console.log(err || 'Arquivo'Gerado);
}) 

*/

import { writeFile } from 'fs';

const produto = {
  nome: 'Celular',
  preco: 4999.99,
  desconto: 0.15
}


writeFile('./' + './arquivoGerado.json', JSON.stringify(produto), err => {
  console.log(err || 'Arquivo Gerado');
})
/* const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

// Sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);


// Assincrono - recomendado
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`);
});

// leitura simplificada de json
const config = require('./arquivo.json')
console.log(config);

// Lendo conteudo de uma pasta
fs.readdir(__dirname, (err, files) => {
  console.log('Conteúdo da pasta...');
  console.log(files);
}); */

import { readFileSync, readFile, readdir } from 'fs';


const path = './data.json';

// Sincrono
const data = readFileSync(path, 'utf-8');
console.log(data);

// Assincrono - recomendado
readFile(path, 'utf-8', (err, data) => {
  const config = JSON.parse(data);
  console.log(`${config.db.host}:${config.db.port}`);
});


// Lendo conteudo de uma pasta
readdir('./', (err, files) => {
  console.log('Conteúdo da pasta...');
  console.log(files);
});
import { readdir } from 'fs';


readdir('./', (err, files) => {
  console.log('Conteúdo da pasta...');
  console.log(files);
});

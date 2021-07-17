// Importando as variaveis

const exportModule = require('./export'); // tudo o que foi exportado do arquivo export.js agora esta contido na constante exportModule e pode ser acessado.

console.log(exportModule.var2);
// por conta do package.json não ira funcionar esse tipo de import, pois esta setado para funcionar import ES6
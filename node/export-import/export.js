// Exportando variaveis

// exportando com this
this.var1 = 10;

// outra forma
exports.var2 = 20;

// outra forma
module.exports.var3 = 30;

// outra forma
const var4 = 40;
module.exports = var4;

// exportando como objeto, este objeto estara disponivel fora do module
module.exports = {

  var5: 50,
  // colocando tambem uma fuction
  soma() {
    return 5 + 5;
  }
}
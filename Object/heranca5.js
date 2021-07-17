// Conseguimos adicionar novas funções com o uso de prototype, strig array e object tem atributo prototype

// exemplo
String.prototype.reverse = function() {        // função reverse não tem por padrao na string mas com proto podemos implementar
  return this.split('').reverse().join('');  //split('') quebrar a palavra em letras transformando em um array (array possui reverse)
}                                          //.reverse() vai inverter a string e posteriosmente juntamos tudo novamanete com o .join()

console.log('Rafael'.reverse());


//exemplo - com array pegando o first (não tem esse método dentro do array)

Array.prototype.first = function() {
  return this[0];
}

console.log([1,2,3,4,5].first());
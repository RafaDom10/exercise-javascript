const a = 1;
const b = 2;
const c = 3;

// maneira antiga, tinha que referenciar
const obj1 = { a: a, b: b, c: c }

// nova sintaxe reduzida
const obj2 = { a, b, c }  // quando o nome da constante é o mesmo d atributo do obj ele ja faz a associação


// Notação literal de objetos
// versão antiga

const nomeAttr = 'nota';
const valorAttr = 8.5;

const obj3 = {}

obj3[nomeAttr] = valorAttr;
console.log(obj3);


// Versão nova
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4);


// definir função dentro de obj

const obj5 = {
  funcao1: function() {  // maneira antiga
    // ...
  }
};

// maneira nova

const obj6 = {
  funcao2() {
    // ...
  }
};


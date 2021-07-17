// let const var
{
  let variavel = 10; // variavel escopo local
  var variavel1 = 'Rafael'; // variavel gobla -> evitar usar var
}
console.log(variavel); // erro - não é acessivel fora do escopo
console.log(variavel1); // acessivel fora do escopo


// Destructuring - desetruturar alguma variavel ou atribuir a propriedades de objs
const [l, e, ...tras] = 'Rafael';
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

// desestruturar atributo de um obj
const { idade, nome } = { nome: 'Rafael', idade: 29 };
console.log(idade, nome);
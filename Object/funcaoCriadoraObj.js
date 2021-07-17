function criaPessoa (nome, idade, sexo) {
  return {
    nome,
    idade,
    sexo
  };
}

// quando o identificar for o mesmo do parametro não é necessário repetilo -> nome: nome

const pessoa = criaPessoa('Rafael', 29, 'Masculino');

console.log(typeof pessoa);


/* const pessoa1 = {
  nome: 'Rafael',
  idade: 29,
  sexo: 'M',

  fala() {
    console.log(`Olá meu nome é ${this.nome} e eu tenho ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
 */
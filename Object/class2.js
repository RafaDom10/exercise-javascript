// Class com exemplos de prototype (herança)

class Avo {
  constructor(sobrenome = 'Silva') {
    this.sobrenome = sobrenome;
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'Professor') {
    super(sobrenome);
    this.profissao = profissao;    
  }
}

class Filho extends Pai {
  constructor() {
    super();
  }
}

const filho = new Filho;
console.log(filho);
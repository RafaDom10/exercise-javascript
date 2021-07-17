//  CADEIA DE PROTÓTIPOS (PROTOTYPE CHAIN)

const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B' };  // utilizandoo a herança (prototype) do avo
const filho = { __proto__: pai, attr3: 'C' };  // herdará todos os atributos do pai e por consequência os atributos do avô


// Exemplo 2 - um pouco mais complexo

const carro = {

  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
};

// se criarmos outro obj prototype de carro

const ferrari = {
  
  modelo: 'F40',
  velMax: 324 // shadowing/sombreamento -> irá sobrescrever o atributo original do prototype
};

const volvo = {
  
  modelo: 'V40',
  status() {  // shadowinng do prototype carro
    return `${this.modelo}: ${super.status()}` //super. para referencia o método que está no prototype
  }
};

// Estabelecenndo relação de prototype
Object.setPrototypeOf(ferrari, carro);  // ferrari agora tem carro como seu prototype
Object.setPrototypeOf(volvo, carro);

// agora apartir daqui podemos acessar tannto os atributos de ferrari quanto os atributos do prototype

console.log(ferrari); // por padrão ele irá lêr(toString) somente os atributos que é por padão do obj
console.log(volvo);

// porem ainda assim podemos acessar funçoes que estão dentro do prototype

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(400);  // usara vel max do obj ferrari e nãoo a do prototype
console.log(ferrari.status());
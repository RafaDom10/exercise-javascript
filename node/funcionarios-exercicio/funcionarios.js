const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

const axios = require('axios');

// filtrando o país
const chineses = f => f.pais === 'China';
// filtrando mulheres
const mulheres = f => f.genero === 'F';
// filtrando menor salario
const menorSalario = (funcionario, funcionarioAtual) => {
  return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual;
}

axios.get(url).then((response) => {
  const funcionarios = response.data;
  
  // menor salario da mulher chinesa

  const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario);

  console.log(func);

});

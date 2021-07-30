// * Tratamento de erros dentro das promises

function funcionarOuNao(valor, chanceDeErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceDeErro) {
      reject('Ocorreu um erro!');
    } else {
      resolve(valor);
    }
  });
}

funcionarOuNao(10, 0.5)
  .then(value => console.log(value))
  //* tratando o erro com catch do reject
  .catch(error => console.log(error));
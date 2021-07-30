// exemplo de promises

function gerarNumerosEntre(min, max, tempo) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve) => {
    setTimeout(() => {
      const aleatorio = parseInt((Math.random() * max - min + 1) + min);
      resolve(aleatorio);
    }, tempo);
  });
}

//* Gerando multiplas promises e resolvendo tudo de uma unica vez

async function gerarMultiplosNumerosAleatorios() {
  return Promise.all([
    gerarNumerosEntre(1, 50, 4000),
    gerarNumerosEntre(1, 50, 5000),
    gerarNumerosEntre(1, 50, 1000),
    gerarNumerosEntre(1, 50, 2000),
    gerarNumerosEntre(1, 50, 500),
  ]);
}

// quando todas as promise forem resolvidas, ai sim será chamado o .then()
gerarMultiplosNumerosAleatorios().then(n => console.log(n));
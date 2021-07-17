// PASSANDO PARAMETROS ENTRE MODULOS

export default function ola(...nomes) {
  return nomes.map(nome => `Olá ${nome}!`);
};

/* module.export = function(...nomes) {
  return nomes.map(nome => `Olá ${nome}!`);
}*/
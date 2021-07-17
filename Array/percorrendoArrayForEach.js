// Formas de percorrer um Array

const games = ['The witcher 3', 'Dragon Age Iquisition', 'Assassin\'s Creed', 'Final Fantasy', 'Dragon Quest'];

// Percorrendo Array com -> forEach()
games.forEach(function(game, index) {
  console.log(`${index + 1} ${game}`);
});
// Mais simplificado
games.forEach(game => console.log(game)); // sem index
games.forEach((game, index) => console.log(index + 1, game)); // com index

// Outra alternativa, passar uma function para oo forEch() como parâmetro
// criando a função em uma variavel
const showGames = games => console.log(games);  // sem index
const showGamesAndIndex = (games, index) => console.log(index + 1, games); // com index
// passando parametro para o forEach()
games.forEach(showGames);
games.forEach(showGamesAndIndex);
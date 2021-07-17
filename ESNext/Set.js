// Não aceita repetição / não indexada

const teams = new Set();

teams.add('Lakers');
teams.add('Bulls').add('Portland').add('Celtics');
teams.add('Lakers'); // não aceitara novamente

console.log(teams);
console.log(teams.size);
console.log(teams.has('lakers')); // case sensitive -> false
console.log(teams.has('Lakers')); // case sensitive -> true
teams.delete('Celtics');  // delentando elementos
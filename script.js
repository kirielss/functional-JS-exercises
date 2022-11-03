let clue = [];
let confidential = [];
let players = []

clue.characters = [];
clue.characters.push('Gongfu', 'Diogenes', 'Batman', 'Xandao', 'Robyssao', 'Geodon', 'Grande', 'Babidi', 'Cassia');

clue.weapons = [];
clue.weapons.push('Katana', 'Taco de sinuca', 'Marreta', 'Panela', 'Soqueira', 'Chifre de boi', 'Faca de cozinha', 'Chave de Fenda', 'Estilingue');

clue.rooms = [];
clue.rooms.push('Varanda', 'Sala de Estar', 'Quarto', 'Suíte', 'Adega', 'Banheiro', 'Cozinha', 'Quintal', 'Corredor');

function randomizer(key) {
    const random = Math.floor(Math.random() * key.length);
    key[random];
    return key.splice(random, 1);
}

confidential.push(randomizer(clue.characters), randomizer(clue.weapons), randomizer(clue.rooms))
console.log(clue)

for (let i=0;i<8;i++) {
    players[i] = [randomizer(clue.characters), randomizer(clue.weapons), randomizer(clue.rooms)]
}

console.log(players);

// confidential.push(randomizer(characters), randomizer(weapons), randomizer(rooms));

/* // testagem
console.log(clue);
console.log(clue.characters);
console.log(typeof(clue.characters));
console.log(clue.characters.length);
console.log(clue.length);
*/

/* just 4fun testing
for (let i=0; i< clue.characters.length; i++) {
console.log(`Essa noite, ${clue.characters[i]} MATOU ${clue.characters[clue.characters.length - i-1]} A SANGUE FRIO utilizando ${clue.weapons[i]} BEM NO MEIO DA ${clue.rooms[i]}!!!`)
console.log('')
}
*/
const exercise = {};

exercise.name = "Rusty";
exercise['room'] = "kitchen";
exercise.weapon = "candlestick";

console.log(exercise);

const {weapon,room} = {"weapon": "candlestick", "room": "kitchen"}

console.log({room, weapon});
console.log(weapon, room);

var namez = exercise.name;

console.log(namez);
console.log(typeof(namez));

console.log({namez});
console.log(typeof({namez}));
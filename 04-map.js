const weapons = ['scythe', 'nunchaku', 'spoon', 'trident', 'katana', 'whip']
/* let brokenWeapons = [];

weapons.map(function(item) {
    brokenWeapons.push(`broken ${item}`)
})

console.log(brokenWeapons) */

const makeBroken = function(item) {
    return `broken ${item}`
}

console.log(weapons.map(makeBroken))

function createObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log(`Hi, my name is ${name}`)
        }
    }
}

var suspects = ['Graviola White', 'Orea Purple', 'Mr.Satan Black', 'Piccolo Green', 'Kuririn Silver', 'Cho\'Gath Gray', 'Primeape Brown']
var suspectsList = suspects.map(createObjects)

console.log(suspectsList)
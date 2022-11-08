const weapons = ['scythe', 'nunchaku', 'spoon', 'trident', 'katana', 'whip']
let brokenWeapons = [];

weapons.map(function(item) {
    brokenWeapons.push(`broken ${item}`)
})

console.log(brokenWeapons)
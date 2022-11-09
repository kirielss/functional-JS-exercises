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

const _ = {};

_.map = function(list, callback) {
    let result = [];
    if (Array.isArray(list)) {
        for (let i=0;i<list.length;i++) {
            result.push(callback(list[i], i, list))
            }
    } else {
        for (let key in list) {
            result.push(callback(list[key], key, list))
        }
    }
    return result
}

const suspectsList = _.map(suspects,createObjects)
console.log(suspectsList)

/* const test = _.map(['abra','kadabra','alakazam','gengar','victrebell'], function(name) {
    return `pokemon ${name}`
})
console.log(test) */

// method 2

_.maps = function(list, callback) {
    let result = [];

    list.forEach(function(v, i, list) {
        result.push(callback(v, i, list))
    })
    return result;
}

console.log(_.maps(suspects,createObjects))
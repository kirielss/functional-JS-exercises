function createObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log(`Hi, my name is ${name}`)
        }
    }
}

/* objects = createObjects('Meganium Black');
console.log(objects)
console.log(objects.color)
objects.speak(); */

var suspects = ['Graviola White', 'Orea Purple', 'Mr.Satan Black', 'Piccolo Green', 'Kuririn Silver', 'Cho\'Gath Gray', 'Primeape Brown']
var suspectsList = []

/* for (let i=0;i<suspects.length;i++) {
    suspectsList.push(createObjects(suspects[i]));
} */
/* 
suspects.forEach(function(name) {
    suspectsList.push(createObjects(name))
})

console.log(suspectsList) */

const _ = {};

// criando meu próprio _.each method
_.each = function(list,callback) {
    if (Array.isArray(list)) {
        for (let i=0; i<list.length; i++) {
            callback(list[i], i , list)
        }
    }
    else {
        for (let key in list) {
            callback(list[key], key, list)
        }
    }
}

_.each(suspects, function(name) {
    suspectsList.push(createObjects(name))
})

console.log(suspectsList)

// exemplo aqui do motivo de levar 3 parâmetros na função. É para poder aplicar em casos gerais
_.each(['boogie man', 'presuntinho', 'alohomora'], function(name, i, list) {
    if (list[i+1]) {
        console.log(name, 'is younger than', list[i+1])
    } else {
        console.log(name, 'is the oldest');
    }
})

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
]

var suspPlaces = [[],[],[]];

var findRoom = function(suspectsList, solution) {

    // loopando o array de objetos com objetos
    suspectsList.forEach((person, i) => {

        // loopando o objeto com objetos
        for (let key in person) {

            // testando se estou na propriedade rooms
            if (key === 'rooms') {

                // loopando dentro do array de objetos rooms
                person[key].forEach((place, index, rooms) => {

                    // loopando dentro do objeto para acessar seu value
                    for (let key in place) {

                        // checando se é false e criando lista de salas suspeitas
                        if (!place[key]) {
                            solution[i].push(key);
                        }
                    }
                })
            }
        }
    })

    // isso aqui é de gênio, queria mto entender 100% disso. Stack Overflow
    return solution.reduce((p,c) => p.filter(e => c.includes(e)));

}

console.log(findRoom(newDevelopment, suspPlaces))

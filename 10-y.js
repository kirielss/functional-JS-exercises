// rascunho

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

// solução da professora (não roda aqui)
// honestamente... eu to de boa com a minha. Ela tá indo fundo demais procurando library no underscore que resolva
// achou o intersection ali mas rapaz n ta resolvendo não... Acho que ela jogou pra cima

const notInRoom = suspect => {

    const emptyRooms = _.reduce(suspect.rooms, (room,memo) => {
        if (room === false) memo.push(room)
        return memo
    }, [])
    
    return emptyRooms;
}

var notInRooms = _.map(newDevelopment, notInRoom)
console.log(notInRooms)

_.intersection(...notInRooms)


//newDevelopment.reduce(notInRoom, [])

/* var suspPlaces = [[],[],[]];

newDevelopment.forEach((person,i) => {
    suspPlaces[i] = person.rooms
})
 */

/* var findRoom = function(suspectsList, solution) {

    // loopando o array de objetos com objetos
    suspectsList.forEach((person, i) => {

            for (const [key, value] of Object.entries(person.rooms)) { console.log(value)
                if (!value) {
                    solution[i].push(key)                 
                    console.log(solution[i])}
            }
                     
        })
    return solution.reduce((p,c) => p.filter(e => c.includes(e)));

}

 console.log(findRoom(newDevelopment, suspPlaces))
 */
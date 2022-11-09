const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

const _ = {};
_.filter = function(list, callback) {
    let result = []
    if (Array.isArray(list)) {
        for (let i=0;i<list.length;i++) {
            if (callback(list[i], i, list)) {
                result.push(list[i])
            }
        }
        return result
    }
    else {
        for (let key in list) {
            if (callback(list[key],key,list)) {
                result.push(list[key])
            }
        }
        return result
    }
}

const presentes = _.filter(videoData, function (name) {
    if (name.present) {
        return true
    }
})

console.log('CUIDADO! OS SEGUINTES INDIVÍDUOS FORAM VISTOS PELAS CÂMERAS: ')
console.log(presentes)

// metodo 2, usando map para criar o filter

_.filters = function (list, callback) {
    let result = [];
    list.forEach(function(v, i, list) {
        if (callback(v,i,list)) {
            result.push(v)
        }
    })
    return result
}

const ausentes = _.filters(videoData, function (name) {
    if (!name.present) {
        return true
    }
})

console.log('ESSAS PESSOAS NÃO ESTAVAM NO LOCAL E SÃO INOCENTES: ')
console.log(ausentes)
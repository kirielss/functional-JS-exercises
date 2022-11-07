const game = {
    suspects: [
        {
            name: 'Rusty',
            color: 'Orange'
        },
        {
            name: 'Machina',
            color: 'Silver'
        }
    ],
    'places': [
        {
            name: 'Kitchen'
        }
    ]
}

/* const suspects = [
    {
        name: 'ladrao',
        color: 'bandido'
    },
    {
        name: 'robysinho',
        color: 'ceifador'
    }
]
 */
game.suspects.push({
    name: 'Clodoveu',
    color: 'Pink'
},
{
    name: 'Robyssao',
    color: 'Black'
}
)


/* console.log(game.suspects)
console.log(game.suspects.length)
 */
/* function loop() {
    for (let i=0; i < game.suspects.length; i++) {
        console.log(game.suspects[i])
        console.log('eta porra ja rodei ' + (i+1) + ' vez')
    }
} */

var guilty;

function loop() {
    for (let i=0; i<game.suspects.length; i++) {
        console.log(`Checando suspeito numero ${i+1}`)
        for (let key in game.suspects[i]) {
            console.log(key)
            console.log(game.suspects[i][key]);
            if (game.suspects[i][key] === 'Pink') {
                guilty = game.suspects[i].name;
            }
        }
    }
    console.log(`O CULPADO É ${guilty}`)
}

loop();

var nomes = []
var cores = []

function destruct() {
    for (let i=0;i<game.suspects.length;i++){
        nomes.push(game.suspects[i].name);
        cores.push(game.suspects[i].color);
    }
    console.log(nomes);
    console.log(cores);
}
// destruct()

// destructuring pra pegar as cores e separa-las em variáveis
/* const [laranja, prata] = [game.suspects[0].color, game.suspects[1].color]
console.log(laranja,prata)
console.log({laranja,prata})
 */

const [{color: cor1}, {color: cor2}, {color: cor3}, {color: cor4}]  = game.suspects
console.log(cor1,cor2,cor3,cor4)
/* console.log({cor1,cor2,cor3,cor4})
console.log([cor1,cor2,cor3,cor4]) */

// código dos cara na aula
/* var gameLoop = function () {
    for (var i = 0; i < game.suspects.length; i++) {
        console.log('outer loop');
        for (var key in game.suspects[i]) {
            console.log('inner loop');
            if (game.suspects[i][key] === "Rusty"){
                console.log('Found \'em !')
            } else {
                console.log('next time !')
            }
        }
    }
}

gameLoop() */
var [a, ,b, ,d] = [1,2,3,4, 'frango'];
console.log(a,b,d)
console.log([a,b,d]);
console.log({a,b,d})

var [a, ...b] = [1,3,5,7,9,21,'frango','1','chicken bones', 99, 1337, 'lo finale']
console.log(a,b);
console.log([a,b]);
console.log({a,b});

let x = 11, y = 23; z = 'whaaaat?'
console.log(x,y,z)
console.log([y,z,x])
console.log({z,x,y})

var [a, [b, [c, d]]] = ['soltinho ', ['esse ta dentro ', [[['mais fundo ainda ', 'la ele... '], 'ufa aqui relaxou '], 'agora ta em casa' ]]];

console.log({a,b,c,d})
console.log(c)

var {babidi: aluno} = {babidi: 'feio'};
console.log(aluno);
console.log({aluno});

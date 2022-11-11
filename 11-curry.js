const _ = {}

_.curry = (fn) => {
    return (arg) => {
        return (arg2) => {
            return fn(arg,arg2)
        }
    }
}

var curried = _.curry((a,b) => {return a,b});

console.log(curried(1)(2))

// exemplo da aula
/* var abc = function(a, b, c) {
    return [a, b, c];
  };
   
  var curried = _.curry(abc);
   
  curried(1)(2)(3);
  // => [1, 2, 3]
   
  curried(1, 2)(3);
  // => [1, 2, 3] */

// ta retornando errado mas whatever
// curry é uma função que retorna função que retorna função... após atribuir a uma variavel vc chama função 2x
// curried(x)(y) -> vai rodar a primeira função com argumento x, retornar uma funçao q ja recebe argumento y, e assim vai



_.compose = (fn,fn2) => {
    return (arg) => {
        const result = fn2(arg);
        return fn(result);
    }
}

// exemplo da aula
/* const consider = (name) => { 
    return `I think it could be... ${name}`; 
  };
  
  const exclaim  = (statement) => { 
    return `${statement.toUpperCase()}!`; 
  };
  
  const blame = _.compose(consider, exclaim);
  
  blame('you');
  
  => 'I think it could be... YOU!' */
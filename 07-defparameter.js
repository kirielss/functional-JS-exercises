// no ES6 vc pode setar um default parameter como o b aqui
/* const add = function(a, b=2) {
    console.log(arguments);
    return a+b;
};
add(3); */

// como fazer default parameter no ES5- ?
const add = function (a,b) {
    if (!b) {
        b = 2
    }
    return a+b
}

console.log(add(5,1))

// outra forma de fazer:
// b = b || 2
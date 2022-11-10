const increment = n => n+1
const square = n => n*n;

const doMathSoIDontHaveTo = (n, func) => func(n);

// detalhe: apesar de poder não utilizar chaves {} nem botar explicitamente o return, professora recomenda colocar

doMathSoIDontHaveTo(5, square);
doMathSoIDontHaveTo(4, increment);

console.log(doMathSoIDontHaveTo(5, square));
console.log(doMathSoIDontHaveTo(4, increment));
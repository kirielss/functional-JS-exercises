const _ = {};

_.reduce = function (list, callback, initial) {
    let memo = initial

    for (let i=0; i<list.length;i++) {
        if (i === 0 && memo === undefined) {
            memo = list[0]
        } else {
            memo = callback(list[i], memo)
        }
    }
    return memo
};

console.log(_.reduce([1,2,3], (v, sum) => v+sum, 0))
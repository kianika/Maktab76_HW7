let getLength = arr => arr.flat(Infinity).length;

console.log(getLength([1, [2, [3, [4, [5, 6]]]]])); 
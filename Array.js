//Array concatenation (數組拼接)
const ArrayConcat = (arr, ...args) => [].concat(arr, ...args);

console.log(ArrayConcat([1], [1,2,3, [4]]));

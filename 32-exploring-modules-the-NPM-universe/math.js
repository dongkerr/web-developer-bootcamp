// module.exports.add = (x, y) => x + y;
// module.exports.PI = 3.1415926;
// module.exports.square = x => x * x;



// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;



// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }
// module.exports = math;

const add = (x, y) => x + y;
const PI = 3.1415926;
const square = x => x * x;

exports.add = add;
exports.square = square;
exports.PI =PI;
var r = Add(1, 2);
console.log(r);
function Add(x, y) {
    return x + y;
}
var add = function (x, y) {
    return x + y;
};
console.log(add(1, 3));
//ES6
var sum = function (x, y) {
    if (x === void 0) { x = 1; }
    if (y === void 0) { y = 3; }
    return x + y;
};
console.log(sum());

function Addition(x, y, z) {
    if (z == undefined) {
        return x + y;
    }
    else {
        return x + y + z;
    }
}
var result = Addition(1, 4);
console.log(result);

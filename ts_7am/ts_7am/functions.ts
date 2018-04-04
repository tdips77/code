let r = Add(1, 2);
console.log(r);

function Add(x: number, y: number) {
    return x + y;
}

const add = function (x: number, y: number) {
    return x + y;
}
console.log(add(1, 3));

//ES6
const sum = (x: number = 1, y: number = 3) => {
    return x + y;
}
console.log(sum());
var program = (function () {
    function program(id, name) {
        this.id = id;
        this.name = name;
    }
    program.prototype.ShowData = function () {
        console.log("Id : " + this.id + ", name:" + this.name);
    };
    return program;
}());
var p1 = new program(1, 'Shailendra');
p1.ShowData();

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var Customer = (function (_super) {
    __extends(Customer, _super);
    function Customer(id, name) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    Customer.prototype.ShowData = function () {
        console.log("Id : " + this.id + ", name:" + this.name);
    };
    return Customer;
}(Person));
exports.Customer = Customer;
//let c1: Customer = new Customer(1, 'Shailendra');
var I1 = new Customer(1, 'Shailendra');
I1.ShowData();

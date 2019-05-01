"use strict";
var Carro = /** @class */ (function () {
    function Carro() {
        var _this = this;
        this.nombre = "Mustang";
        this.marca = "ford";
        this.toString = function () { return console.log("toString[ nombre : " + _this.nombre + ", marca : " + _this.marca + " ]"); };
    }
    return Carro;
}());
var carro = new Carro();
carro.toString();

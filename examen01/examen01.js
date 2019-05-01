"use strict";
// // Uso de Let y Const
// var nombre = "Ricardo Tapia";
// var edad = 23;
// var PERSONAJE = {
//   nombre: nombre,
//   edad: edad
// };
//Solucion 01
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log("Nombre= " + nombre + ", edad = " + edad + " , Personaje { " + PERSONAJE.nombre + ", " + PERSONAJE.edad + "}");
var batman = {
    nombre: "Bruno Dias",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
var mostrarHeroe = function (heroe) {
    var nombre = heroe.nombre, artesMarciales = heroe.artesMarciales;
    console.log("Nombre= " + nombre + " , artesMarciales=[" + artesMarciales + "]");
};
mostrarHeroe(batman);
// // Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a, b ){
//     return (a + b) * 2
//   }
//Solucion 03
var resultadoDoble = function (a, b) { return (a + b) * 2; };
console.log(resultadoDoble(2, 3));
// // Función con parametros obligatorios, opcionales y por defecto
// // donde NOMBRE = obligatorio
// //       PODER  = opcional
// //       ARMA   = por defecto = "arco"
// function getAvenger( nombre, poder, arma ){
//     var mensaje;
//     if( poder ){
//        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
//     }else{
//        mensaje = nombre + " tiene un " + poder
//     }
//   };
//Solucion 04
var getAvenger = function (nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    return (poder) ? nombre + " tiene el poder de " + poder + " y un arma " + arma :
        nombre + " tiene un " + poder;
};
console.log(getAvenger("Iron Man", "Dinero", "traje"));
console.log(getAvenger("XX"));
console.log(getAvenger("YY", 'aaa'));
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
//Solucion 05
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        var _this = this;
        this.base = base;
        this.altura = altura;
        this.calcularArea = function () { return _this.base * _this.altura; };
    }
    return Rectangulo;
}());
/*
class Rectangulo{
    base:number;
    altura:number;
    constructor(base:number,altura:number){
        this.base = base;
        this.altura = altura;
    }
    calcularArea = () => this.base*this.altura;
}
*/
var rectangulo = new Rectangulo(5, 8);
console.log(rectangulo.calcularArea());

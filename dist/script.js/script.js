"use strict";

var _impuestos = require("./impuestos.js");

var _cliente = require("./cliente.js");

// IMPORTS DE CLASES IMPUESTOS & CLIENTE
// NUEVAS INSTANCIAS DE IMPUESTOS Y CLIENTE
var impuesto1 = new _impuestos.Impuestos(100, 20);
var cliente1 = new _cliente.Cliente("Juan", impuesto1); // TEXTOS PARA MAYOR LEGIBILIDAD DE LOS RESULTADOS EN CONSOLA

var nombre = "Cliente: ";
var total = "↓ Total a Pagar"; // IMPRESION DEL NOMBRE DEL CLIENTE

console.log(nombre + cliente1.cliente); // IMPRESION DEL OBJETO DE LOS IMPUESTOS

console.log(cliente1.impuesto); //IMPRESION DE LOS IMPUESTOS A PAGAR POR EL CLIENTE

console.log(total);
console.log(cliente1.calcularImpuesto());
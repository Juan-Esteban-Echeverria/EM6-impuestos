// IMPORTS DE CLASES IMPUESTOS & CLIENTE
import {Impuestos} from "./impuestos.js"
import {Cliente} from "./cliente.js"

// NUEVAS INSTANCIAS DE IMPUESTOS Y CLIENTE
const impuesto1 = new Impuestos(100, 20)
const cliente1 = new Cliente("Juan", impuesto1)

// TEXTOS PARA MAYOR LEGIBILIDAD DE LOS RESULTADOS EN CONSOLA
const nombre = "Cliente: "
const total = "↓ Total a Pagar"

// IMPRESION DEL NOMBRE DEL CLIENTE
console.log(nombre + cliente1.cliente)

// IMPRESION DEL OBJETO DE LOS IMPUESTOS
console.log(cliente1.impuesto)

//IMPRESION DE LOS IMPUESTOS A PAGAR POR EL CLIENTE
console.log(total)
console.log(cliente1.calcularImpuesto())

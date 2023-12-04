let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let values = lines.shift().trim().split(" ");
codigo1 = parseInt(values.shift());
quantidade1 = parseInt(values.shift());
valor1 = parseFloat(values.shift());

values = lines.shift().trim().split(" ");
codigo2 = parseInt(values.shift());
quantidade2 = parseInt(values.shift());
valor2 = parseFloat(values.shift());

let valor = quantidade1 * valor1 + quantidade2 * valor2;

console.log(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`);
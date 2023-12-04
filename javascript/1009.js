var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let vededor = lines.shift();
let salario = parseFloat(lines.shift());
let vendas = parseFloat(lines.shift());


let total = salario + vendas * 0.15;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);


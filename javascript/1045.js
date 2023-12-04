var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n')[0].split(' ').map(Number); 

var ladoA = lines[0];
var ladoB = lines[1];
var ladoC = lines[2];

var arrayLados = [ladoA, ladoB, ladoC];
arrayLados.sort(function(a, b) { return a - b; });
var maiorLado = arrayLados[2];
var ladoMedio = arrayLados[1];
var menorLado = arrayLados[0];

if (maiorLado >= ladoMedio + menorLado) {
    console.log("NAO FORMA TRIANGULO");
} else if (maiorLado * maiorLado === ladoMedio * ladoMedio + menorLado * menorLado) {
    console.log("TRIANGULO RETANGULO");
} else if (maiorLado * maiorLado > ladoMedio * ladoMedio + menorLado * menorLado) {
    console.log("TRIANGULO OBTUSANGULO");
} else if (maiorLado * maiorLado < ladoMedio * ladoMedio + menorLado * menorLado) {
    console.log("TRIANGULO ACUTANGULO");
}

if (ladoA === ladoB && ladoA === ladoC) {
    console.log("TRIANGULO EQUILATERO");
} else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
    console.log("TRIANGULO ISOSCELES");
}

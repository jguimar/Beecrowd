var somaPositivo = 0;
var contadorPositivo = 0;

for (let i = 0; i < 6; i++) {
    var numero = parseFloat(lines.shift());
    if (numero >= 0) {
        somaPositivo += numero;
        contadorPositivo += 1;
    }
}

console.log(contadorPositivo + " valores positivos");
console.log((somaPositivo / contadorPositivo).toFixed(1));

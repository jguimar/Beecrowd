let numero = parseFloat(lines.shift().trim());

let numeroPositivo;

for (let i = 0; i < 6; i++) {
  if (numero > 0) {
    numeroPositivo++;
  }
}

console.log(`${numeroPositivo} valores positivos`);

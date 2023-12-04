let positivo = 0;

for (let i = 0; i < 5; i++) {
  let numero = parseInt(lines.shift());
  if (numero % 2 === 0) {
    positivo += 1;
  }
}

console.log(positivo + " valores pares");

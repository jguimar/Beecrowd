let x = parseInt(lines.shift());
let z = parseInt(lines.shift());

while (z <= x) {
  z = parseInt(lines.shift());
}

let soma = 0;
let contador = 1;

for (let i = x; i < z; i++) {
  soma += i;

  if (soma < z) {
    contador += 1;
  }
}

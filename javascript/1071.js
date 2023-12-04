let x = parseInt(lines.shift());
let y = parseInt(lines.shift());

if (x > y) {
  let aux;
  aux = x;
  x = y;
  y = aux;
}

let soma = 0;
for (let i = x + 1; i < y; i++) {
  if (i % 2 !== 0) {
    soma += i;
  }
}

console.log(soma);

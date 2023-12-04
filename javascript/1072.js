const N = parseInt(lines.shift());

let x = 0;

for (let i = 0; i < N; i++) {
  let numero = parseInt(lines.shift());
  if (numero >= 10 && numero <= 20) {
    x += 1;
  }
}

console.log(x + " in");
console.log(N - x + " out");

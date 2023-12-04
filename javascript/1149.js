let line = lines.shift().split(" ");

let a = parseInt(lines.shift());
let n = parseInt(lines.shift());

while (n <= 0) {
  n = parseInt(lines.shift());
}

let soma = 0;
for (let i = 0; i < n; i++) {
  soma += a + i;
}

console.log(soma);

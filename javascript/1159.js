const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split("\n");

let n = parseInt(lines.shift());

while (n !== 0) {
  let soma = 0;
  for (let i = n; i <= n + 9; i += 1) {
    if (i % 2 === 0) {
      soma += i;
    }
  }

  console.log(soma);

  n = parseInt(lines.unshift());
}

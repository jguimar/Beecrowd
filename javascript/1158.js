let n = parseInt(lines.shift());

while (n !== 0) {
  let [x, y] = lines.shift().split(" ").map(Number);
  let soma = 0;
  while (y !== 0) {
    if (x % 2 !== 0) {
      soma += x;
      y -= 1;
    }
    x += 1;
  }
  console.log(soma);
  n -= 1;
}

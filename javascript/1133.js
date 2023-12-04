let x = parseInt(lines.shift());
let y = parseInt(lines.shift());

if (x > y) {
  let aux = x;
  x = y;
  y = aux;
}

for (let i = x + 1; i < y; i++) {
  if (i % 5 == 2 || i % 5 == 3) {
    console.log(i);
  }
}

const N = parseInt(lines.shift());

for (let i = 2; i < 10000; i++) {
  if (i % N === 2) {
    console.log(i);
  }
}

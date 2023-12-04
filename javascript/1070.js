let i = parseInt(lines.shift());

for (let impar = 0; impar < 12; impar++) {
  if (i % 2 === 1) {
    console.log(i);
  }

  i += 1;
  impar += 1;
}

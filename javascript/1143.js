let n = parseInt(lines.shift());

for (let i = 1; i <= n; i++) {
  let linha = i * i;
  let aux = linha * i;

  console.log(`${i} ${linha} ${aux}`);
}

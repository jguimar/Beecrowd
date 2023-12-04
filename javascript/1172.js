for (let i = 0; i < 10; i++) {
  if (lines[i] <= 0) {
    lines[i] = 1;
  }

  console.log(`x[${i}] = ${Number(lines[i])}`);
}

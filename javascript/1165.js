let n = parseInt(lines.shift());

for (let j = 0; j < n; j++) {
  let n = parseInt(lines.shift());
  let primo = true;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      primo = false;
      break;
    }
  }

  if (primo && n > 1) {
    console.log(n + " eh primo");
  } else {
    console.log(n + " nao eh primo");
  }
}

let n = parseInt(lines.shift());

for (let i = 1; i <= n; i++) {
  let contador = 0;
  let x = parseInt(lines.shift());

  for (let j = 0; j < x; j++) {
    if (x % j == 0) {
      contador += j;
    }
  }

  if (contador == x) {
    console.log(x + " eh perfeito");
  } else {
    console.log(x + " nao eh perfeito");
  }
}

let n = parseInt(lines.shift());

for (let i = 1; i <= n; i++) {
  const x = parseInt(lines.shift());

  let perfeito = true;
  for (let j = 1; j < x; j++) {
    if (x % j === 0) {
      perfeito = false;
      break;
    }
  }

  if (perfeito) {
    console.log(x + " eh perfeito");
  } else {
    console.log(x + " nao eh perfeito");
  }
}

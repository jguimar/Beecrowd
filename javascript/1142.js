const N = parseInt(lines.shift());

let numeroAtual = 1;

for (let i = 0; i < N; i++) {
  console.log(`${numeroAtual} ${numeroAtual + 1} ${numeroAtual + 2} PUM`);
  numeroAtual += 4;
}

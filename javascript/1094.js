var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines.shift());

let totalExperimentos = 0;
let coelhos = 0;
let ratos = 0;
let sapos = 0;

for (let i = 0; i < n; i++) {
  let [quantidade, tipo] = lines[i].split(' ');

  totalExperimentos += parseInt(quantidade);

  if (tipo === 'C') {
    coelhos += parseInt(quantidade);
  } else if (tipo === 'R') {
    ratos += parseInt(quantidade);
  } else if (tipo === 'S') {
    sapos += parseInt(quantidade);
  }
}

console.log(`Total: ${totalExperimentos} cobaias`);
console.log(`Total de coelhos: ${coelhos}`);
console.log(`Total de ratos: ${ratos}`);
console.log(`Total de sapos: ${sapos}`);
console.log(`Percentual de coelhos: ${(((coelhos * 100) / totalExperimentos).toFixed(2))} %`);
console.log(`Percentual de ratos: ${(((ratos * 100) / totalExperimentos).toFixed(2))} %`);
console.log(`Percentual de sapos: ${(((sapos * 100) / totalExperimentos).toFixed(2))} %`);
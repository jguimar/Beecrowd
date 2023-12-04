var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line = lines.shift().split(" ").map(parseFloat);

let n = line[0]; 
let valor = line[1];
let valor2 = line[2];
let valor3 = line[3];

let mediaPonderada = (valor * 2 + valor2 * 3 + valor3 * 5) / 10;

for (let i = 0; i < n; i++) {
  console.log(mediaPonderada.toFixed(1));
}

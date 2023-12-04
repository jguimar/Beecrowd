let grenais = 0;
let gremio = 0;
let inter = 0;
let empate = 0;

while (true) {
  let [i, g] = lines.shift().split(" ").map(Number);

  grenais += 1;

  if (i > g) {
    inter += 1;
  } else if (i < g) {
    gremio += 1;
  } else {
    empate += 1;
  }

  console.log("Novo grenal (1-sim 2-nao)");

  let n = parseInt(lines.shift());
  if (n == 2) {
    break;
  }
}

console.log(grenais + " grenais");
console.log("Inter:" + inter);
console.log("Gremio:" + gremio);
console.log("Empates:" + empate);

if (inter > gremio) {
  console.log("Inter venceu mais");
} else if (inter < gremio) {
  console.log("Gremio venceu mais");
} else {
  console.log("Nao houve vencedor");
}

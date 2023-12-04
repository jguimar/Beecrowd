export function problem(lines) {
  const valores = lines.shift().split(" ").map(Number);

  const ladoA = valores[0];
  const ladoB = valores[1];
  const ladoC = valores[2];

  let maiorLado;
  let somaLados;
  let eTriangulo;

  if (ladoA > ladoB && ladoA > ladoC) {
    maiorLado = ladoA;
  } else if (ladoB > ladoC) {
    maiorLado = ladoB;
  } else {
    maiorLado = ladoC;
  }

  if (maiorLado === ladoA) {
    somaLados = ladoB + ladoC;
  } else if (maiorLado === ladoB) {
    somaLados = ladoA + ladoC;
  } else {
    somaLados = ladoA + ladoB;
  }

  if (somaLados > maiorLado) {
    eTriangulo = true;
  } else {
    eTriangulo = false;
  }

  if (eTriangulo) {
    let perimetro = ladoA + ladoB + ladoC;

    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
  } else {
    let areaTrapezio = ((ladoA + ladoB) * ladoC) / 2;

    console.log(`Area = ${areaTrapezio.toFixed(1)}`);
  }
}

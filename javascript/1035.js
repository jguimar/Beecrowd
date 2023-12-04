export function problem(lines) {
   let a = parseInt(lines[0]);
  let b = parseInt(lines[1]);
  let c = parseInt(lines[2]);
  let d = parseInt(lines[3]);

  let bMaiorC = b > c;
  let dMaiorA = d > a;
  let maiores = (c + d ) >( a + b);

  if (bMaiorC && dMaiorA && maiores && (c >= 0) && (d >= 0) && (a % 2 === 0)) {
    console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
// Versão 2
  let valor = lines[0].split(' ').map(Number);

  function calculaMaiores(a, b, c, d) {
    if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0) {
      console.log('Valores aceitos');
    } else {
      console.log('Valores nao aceitos');
    }
  }
   calculaMaiores(...valor);
}

export function problem(lines) {
  var coordenada =input().split(" ");

  var x = parseFloat(coordenada[0]);
  var y = parseFloat(coordenada[1]);

  if (x == 0 && y == 0) {
    console.log(`Origem`);
  } else if (x == 0) {
    console.log(`Eixo Y`);
  } else if (y == 0) {
    console.log(`Eixo X`);
  } else if (y > 0 && x > 0) {
    console.log(`Q1`);
  } else if (y > 0 && x < 0) {
    console.log(`Q2`);
  } else if (y < 0 && x < 0) {
    console.log(`Q3`);
  } else if (y < 0 && x > 0) {
    console.log(`Q4`);
  }
}

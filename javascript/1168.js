const numLeds = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];

let caractere;
let quantidadeLeds;
let numero;

let total = lines.shift();

for (let i = 0; i < total; i++) {
  numero = lines[i];
  quantidadeLeds = 0;

  for (let indice = 0; indice < numero.length; indice++) {
    caractere = numero[indice];
    quantidadeLeds =
      quantidadeLeds + adicionaQuantidadeLeds(numLeds, caractere);
  }

  console.log(quantidadeLeds + "leds");
}

function adicionaQuantidadeLeds(numLeds, caractere) {
  return numLeds[caractere];
}

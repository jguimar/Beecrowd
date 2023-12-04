let maiorValor = parseInt(lines.shift());

let posicaoMaiorValor = 1;

for (let i = 0; i <= 100; i++) {
  let numero = parseInt(lines.shift());

  if (numero > maiorValor) {
    maiorValor = numero;
    posicaoMaiorValor = 1;
  }
}

console.log(maiorValor);
console.log(posicaoMaiorValor);

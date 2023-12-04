let soma = 0;
let contador = 0;
let media;

while (true) {
  let idade = parseInt(lines.shift());

  if (idade < 0) {
    break;
  }

  soma += idade;
  contador += 1;

  media = parseFloat(soma / contador);
}

console.log(media.toFixed(2));

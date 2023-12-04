const tamanhoMatriz = 12;

const CalculaLinha = lines[0];
const operacao = lines[1];

const matriz = [];

cont = 2;

for (let linha = 0; linha < tamanhoMatriz; linha++) {
  let colunas = [];

  for (let coluna = 0; coluna < tamanhoMatriz; coluna++) {
    coluna[(colunas = Number(lines[cont]))];
    cont++;
  }

  matriz[linha] = colunas;
}

switch (operacao) {
  case "S":
    console.log(calcularSoma(matriz, CalculaLinha, tamanhoMatriz).toFixed(1));
    break;
  case "M":
    console.log(calcularMedia(matriz, CalculaLinha).toFixed(1));
    break;
}

function calcularSoma(matriz, linha) {
  let soma = 0;

  for (let coluna = 0; coluna < matriz.length; coluna++) {
    soma = soma + matriz[linha][coluna];
  }

  return soma;
}

function calcularMedia(matriz, linha) {
  let media = calcularSoma(matriz, linha) / 12;
  return media;
}

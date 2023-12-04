let ordem

let matriz = [[]]

while(true) {
    ordem = Number(lines.shift())

    if (ordem == 0) {
        break
    }
    
    //gerar os valores que serao utilizados como linhas
    for (let linha = 0; linha < ordem; linha++){
        let colunas = []
        //gerar os valores que serao utilizados como colunas
        for(let coluna = 0; coluna < ordem; coluna++){
            colunas[coluna] = identificarValorCelula(linha, coluna)
        }

        matriz[linha] = colunas
    }

    for (let i = 0; i < ordem; i++) {
        let linha = '';
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j].toString().padStart(3, ' ') + ' ';
        }
        console.log(linha.trimRight());
    }
    console.log();
} 


function identificarValorCelula(linha, coluna){
    return Math.abs(linha - coluna) + 1
}
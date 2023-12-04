for (let i = 1; i <= lines[0]; i++) {
    let palavra = lines[i];
    let mensagemCifrada = [];
  
    mensagemCifrada = primeiraPassada(palavra);
    mensagemCifrada = inverter(mensagemCifrada); 
    mensagemCifrada = terceiraPassada(mensagemCifrada);
    imprimirMensagemCifrada(mensagemCifrada); 
  }
  
  function imprimirMensagemCifrada(mensagemCifrada) { 
    let txtCifrado = "";
  
    for (let i = 0; i < mensagemCifrada.length; i++) {
      txtCifrado += mensagemCifrada[i];
    }
  
    console.log(txtCifrado);
  }
  
  function terceiraPassada(mensagemCifrada) {
    let metade = parseInt(mensagemCifrada.length / 2);
  
    for (let i = metade; i < mensagemCifrada.length; i++) {
      let codAscii = mensagemCifrada[i].charCodeAt(); 
      mensagemCifrada[i] = String.fromCharCode(codAscii - 1);
    }
  
    return mensagemCifrada;
  }
  
  function inverter(vetor) {
    let aux;
    let metade = vetor.length / 2;
    let metadeInteiro = parseInt(metade);
    let limite;
  
    limite = metade == metadeInteiro ? metade : metadeInteiro;
    limite--;
  
    for (let i = 0, j = vetor.length - 1; i < metade; i++, j--) { 
      aux = vetor[i];
      vetor[i] = vetor[j];
      vetor[j] = aux;
    }
  
    return vetor;
  }
  
  function letra(codAscii) {
    if (
      (codAscii >= 65 && codAscii <= 90) ||
      (codAscii >= 97 && codAscii <= 122)
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  function primeiraPassada(palavra) {
    let codAscii;
    let mensagemCifrada = [];
  
    for (let i = 0; i < palavra.length; i++) {
      codAscii = palavra.charCodeAt(i); // 
  
      if (letra(codAscii)) {
        mensagemCifrada[i] = String.fromCharCode(codAscii + 3);
      } else {
        mensagemCifrada[i] = palavra[i];
      }
    }
    return mensagemCifrada;
  }
  
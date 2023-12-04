let novaNota;
while(true){
    let soma = 0;
    let contador = 0;
    while(contador != 2){
        let nota = parseFloat(lines.shift());
        if (nota >= 0 && nota <= 10){
            soma += nota;
            contador += 1;
        }
        else{
            console.log("nota invalida");
        }
    }
    console.log("media =", (soma / contador).toFixed(2));
    while(true){
        console.log("novo calculo (1-sim 2-nao)");
        novaNota = parseInt(lines.shift());
        if (novaNota < 1 || novaNota > 2){
            continue;
        }
        else{
            break;
        }
    }
    if (novaNota == 2){
        break;
    }
}
let soma = 0;
let n = 0;

while(n != 2){
    let nota = parseFloat(lines.shift());
    if (nota >= 0 && nota <= 10){
        soma += nota;
        n += 1;
    }
    else{
        console.log("nota invalida");
    }
}
console.log("media =", (soma / n).toFixed(2));
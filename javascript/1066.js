let positivo = 0;
let negativo = 0;
let par = 0;
let impar = 0;

for(let i = 0; i < 5; i++){
    let num = parseInt(lines.shift());
    if (num  > 0){
        positivo += 1;
    }
    if (num < 0){
        negativo += 1;
    }
    if (num % 2 === 0){
        par += 1;
    }
    if (num % 2 === 1){
        impar += 1;
    }
}
console.log(par +" valor(es) par(es)");
console.log(impar +" valor(es) impar(es)");
console.log(positivo +" valor(es) positivo(s)");
console.log(negativo +" valor(es) negativo(s)");
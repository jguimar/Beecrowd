let [x, y] = lines.shift().split(" ").map(Number);

let contador = 0;

for (let i = 1; i <= y; i++){
    contador += 1;
    if (contador == x){
        console.log(i);
        contador = 0;
    }
    else{
        process.stdout.write(i+ " ");
    }
}
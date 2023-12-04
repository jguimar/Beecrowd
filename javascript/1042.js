export function problem(lines) {
    const valor = (a, b) => a - b;

    let line = lines.shift().trim().split(' ').map((x) => parseInt(x));
    let c = [...line];
    
    c.sort(valor);
    
    for(let i = 0; i < 3; ++i){
        console.log(c[i]);
    }
    console.log();
    for(let i = 0; i < 3; ++i){
        console.log(line[i]);
    }
}

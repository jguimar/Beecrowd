while(true){
    let x = parseInt(lines.shift());
    if (x === 0){
        break;
    }
    let i;
    for(i = 1; i < x; i++){
        process.stdout.write(i+ " ");
    }
    console.log(i);
}
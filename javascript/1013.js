export  function problem (lines){

const valores = lines[0].split(' ').map(Number);

const a = valores[0];
const b = valores[1];
const c = valores[2];

const AB = (a + b + Math.abs(a - b))/2;
const ABC = (AB + c + Math.abs(AB - c))/2;

console.log(`${ABC} eh o maior`);
}


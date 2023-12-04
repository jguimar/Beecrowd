const salario = parseFloat(lines.shift());

let reajusteSalario;
let percentual;

if (salario >= 0 && salario <= 400) {
  reajusteSalario = salario * 0.15;
  percentual = 15;
} else if (salario > 400 && salario <= 800) {
  reajusteSalario = salario * 0.12;
  percentual = 12;
} else if (salario > 800 && salario <= 1200) {
  reajusteSalario = salario * 0.1;
  percentual = 10;
} else if (salario > 1200 && salario <= 2000) {
  reajusteSalario = salario * 0.07;
  percentual = 7;
} else {
  reajusteSalario = salario * 0.04;
  percentual = 4;
}

const novoSalario = (reajusteSalario + salario).toFixed(2);

console.log(`Novo salario: ${novoSalario}`);
console.log(`Reajuste ganho: ${reajusteSalario.toFixed(2)}`);
console.log(`Em percentual: ${percentual} %`);

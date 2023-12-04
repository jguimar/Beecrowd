let alcool = 0;
let gasolina = 0;
let diesel = 0;

while (true) {
  let codigo = parseInt(lines.shift());

  switch (codigo) {
    case 1:
      alcool += 1;
      break;
    case 2:
      gasolina += 1;
      break;
    case 3:
      diesel += 1;
      break;

    case 4:
      console.log("MUITO OBRIGADO");
      break;

    default:     
      break;
  }

  if (codigo === 4) {
    break; 
  }
}

console.log("Alcool: " + alcool);
console.log("Gasolina: " + gasolina);
console.log("Diesel: " + diesel);

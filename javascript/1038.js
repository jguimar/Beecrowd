export function problem(lines) {
  const [codigo, quantidade] = lines.shift().split(" ").map(Number);

  let total;

  switch (codigo) {
    case 1:
      total = quantidade * 4;
      break;
    case 2:
      total = quantidade * 4.5;
      break;
    case 3:
      total = quantidade * 5;
      break;
    case 4:
      total = quantidade * 2;
      break;
    case 5:
      total = quantidade * 1.5;
      break;
  }

  console.log(`Total: R$ ${total.toFixed(2)}`);
}

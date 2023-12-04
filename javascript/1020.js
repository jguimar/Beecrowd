export function problem (lines){

  const total = lines[0];
  const ano = Math.floor(total / 365);
  const mes = Math.floor((total % 365) / 30);
  const dia = (total % 365) % 30;

  console.log(`${ano} ano(s)`);
  console.log(`${mes} mes(es)`);
  console.log(`${dia} dia(s)`);
}

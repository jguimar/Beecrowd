export function problem(lines) {
  const notas = lines[0].split(" ").map(Number);
  const pesoNota = [2, 3, 4, 1];

  const somaPeso = (total, peso) => total + peso;
  const totalPesos = pesoNota.reduce(somaPeso, 0);

  const somaNota = (total, nota, indice) => total + nota * pesoNota[indice];
  const totalNotas = notas.reduce(somaNota, 0);

  const media = totalNotas / totalPesos;

  console.log(`Media: ${media.toFixed(1)}`);

  if (media >= 7) {
    console.log(`Aluno aprovado.`);
  } else if (media >= 5) {
    const exame = Number(lines[1]);
    console.log(`Aluno em exame.`);
    console.log(`Nota do exame: ${exame.toFixed(1)}`);

    const mediaExame = (media + exame) / 2;
    if (mediaExame >= 5) {
      console.log(`Aluno aprovado.`);
    } else {
      console.log(`Aluno reprovado.`);
    }
    console.log(`Media final: ${mediaExame.toFixed(1)}`);
  } else {
    console.log(`Aluno reprovado.`);
  }
}

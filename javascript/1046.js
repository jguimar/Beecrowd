var [horaInicial, horaFinal] = lines[0].split(" ").map(Number);

var duracao;

if (horaInicial < horaFinal) {
  duracao = horaFinal - horaInicial;
} else {
  duracao = 24 - horaInicial + horaFinal;
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`);

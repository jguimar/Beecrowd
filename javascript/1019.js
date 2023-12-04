export function problem(lines) {
  const total = lines[0];
  const horas = Math.floor(total / 3600);
  const minutos = Math.floor((total % 3600) / 60);
  const segundos = total % 60;

  console.log(`${horas}:${minutos}:${segundos}`);
}

  // versão 2

  const total = lines[0];

function converSegundos(segundos, tipo) {
  const converte = { horas: 3600, minutos: 60, segundos: 1 };

  const quantidade = Math.floor(segundos / converte[tipo]);
  const resto = segundos % converte[tipo];
  return { quantidade, resto };
}

function formatarHora(segundos) {
  const horas = converSegundos(segundos, 'horas');
  const minutos = converSegundos(horas.resto, 'minutos');

  return `${horas.quantidade}:${minutos.quantidade}:${minutos.resto}`;
}

console.log(formatarHora(total));




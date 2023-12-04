var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines[0].split(' ').map(Number);

var duracaoHoras, duracaoMinutos;

if (horaInicial === horaFinal && minutoInicial === minutoFinal) {
    duracaoHoras = 24;
    duracaoMinutos = 0;
} else {
    var minutosInicial = horaInicial * 60 + minutoInicial;
    var minutosFinal = horaFinal * 60 + minutoFinal;

    if (minutosFinal <= minutosInicial) {
        minutosFinal += 24 * 60;
    }

    var minutosDuracao = minutosFinal - minutosInicial;

    duracaoHoras = Math.floor(minutosDuracao / 60);
    duracaoMinutos = minutosDuracao % 60;
}

console.log(`O JOGO DUROU ${duracaoHoras} HORA(S) E ${duracaoMinutos} MINUTO(S)`);

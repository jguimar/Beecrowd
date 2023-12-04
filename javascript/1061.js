const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const separador = [' ', '\n'];
const lines = line.split(new RegExp(separador.join('|'), 'g'));

const descricaoInicio = lines.shift();
const diaInicio = parseInt(lines.shift());
const horaInicio = parseInt(lines.shift());
const descricaoInicio2 = lines.shift();
const minutoInicio = parseInt(lines.shift());
const descricaoInicio3 = lines.shift();
const segundoInicio = parseInt(lines.shift());
const descricaoTermino = lines.shift();
const diaTermino = parseInt(lines.shift());
const horaTermino = parseInt(lines.shift());
const descricaoTermino2 = lines.shift();
const minutoTermino = parseInt(lines.shift());
const descricaoTermino3 = lines.shift();
const segundoTermino = parseInt(lines.shift());

const totalSegundosInicio = (diaInicio * 24 * 3600) + (horaInicio * 3600) + (minutoInicio * 60) + segundoInicio;
const totalSegundosTermino = (diaTermino * 24 * 3600) + (horaTermino * 3600) + (minutoTermino * 60) + segundoTermino;
const diferencaSegundos = totalSegundosTermino - totalSegundosInicio;

const dias = Math.floor(diferencaSegundos / (24 * 3600));
const horas = Math.floor((diferencaSegundos % (24 * 3600) / 3600));
const minutos = Math.floor((diferencaSegundos % 3600 / 60));
const segundos = diferencaSegundos % 60;

console.log(`${dias} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);

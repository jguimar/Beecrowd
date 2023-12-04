export function problem(lines){

    const tempo = lines[0].split(' ').map(Number);
    const velocidade = lines[1].split(' ').map(Number);
    const distancia = tempo * velocidade;
    const litros = distancia /12;

    console.log(litros.toFixed(3));

}
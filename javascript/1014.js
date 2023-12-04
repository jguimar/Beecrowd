export function problem(lines){

    const DISTANCIA = lines[0];
    const COMBUSTIVEL = lines[1];

    const TOTAL = DISTANCIA/COMBUSTIVEL;

    console.log(`${TOTAL.toFixed(3)} km/l`)
}
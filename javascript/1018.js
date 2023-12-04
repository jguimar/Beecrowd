export function problem(lines) {
    const Total = lines[0];
    const ValorNotas = [100, 50, 20, 10, 5, 2, 1];
    
    function quantiaNotas(valor, notas) {
      const quantidade = Math.floor(valor / notas);
      return quantidade;
    }
    
    function quantidadeDeNota(valor, cedulas) {
      const listaCedulas = cedulas.map((notas) => {
        const quantidade = quantiaNotas(valor, notas);
        valor = valor - quantidade * notas;
        return { notas, quantidade };
      });
      return listaCedulas;
    }
    
    function mostraNotas(valor, cedulas) {
      const notasUsadas = quantidadeDeNota(valor, cedulas);
    
      console.log(valor);
    
      notasUsadas.forEach(({ quantidade, notas }) => {
        console.log(`${quantidade} nota(s) de R$ ${notas},00`);
      });
    }
    
    mostraNotas(Total, ValorNotas);
    
}

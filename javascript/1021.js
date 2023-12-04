export function problem(lines) {
  let [var1, var2, var3, var4] = lines.shif().split(" ");

  let valor = lines.shift();

  console.log("NOTAS:");

  nota = 100;
  qtdeNotas = parseInt(valor / nota);
  resto = valor % nota;
  console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00");

  nota = 50;
  qtdeNotas = parseInt(resto / nota);
  resto = resto % nota;
  console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00");

  nota = 20;
  qtdeNotas = parseInt(resto / nota);
  resto = resto % nota;
  console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00");

  nota = 10;
  qtdeNotas = parseInt(resto / nota);
  resto = resto % nota;
  console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00");

  nota = 5;
  qtdeNotas = parseInt(resto / nota);
  resto = resto % nota;
  console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00");

  nota = 2;
  qtdeNotas = parseInt(resto / nota);
  resto = resto % nota;
  console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00");

  console.log("MOEDAS:");
  moeda = 1;
  qtdeMoedas = parseInt(resto / moeda);
  resto = resto % moeda;
  console.log(qtdeMoedas + " moeda(s) de R$ 1.00");

  //para contornar o problema dos números fracionarios
  //estou multiplicando por 100 e arredondando
  resto = parseInt(resto * 100);

  //0.50 centavos
  moeda = 50;
  qtdeMoedas = parseInt(resto / moeda);
  resto = resto % moeda;
  console.log(qtdeMoedas + " moeda(s) de R$ 0." + moeda);

  //25 centavos
  moeda = 25;
  qtdeMoedas = parseInt(resto / moeda);
  resto = resto % moeda;
  console.log(qtdeMoedas + " moeda(s) de R$ 0." + moeda);

  //10 centavos
  moeda = 10;
  qtdeMoedas = parseInt(resto / moeda);
  resto = resto % moeda;
  console.log(qtdeMoedas + " moeda(s) de R$ 0." + moeda);

  //5 centavos
  moeda = 5;
  qtdeMoedas = parseInt(resto / moeda);
  resto = resto % moeda;
  console.log(qtdeMoedas + " moeda(s) de R$ 0.0" + moeda);

  //1 centavos
  moeda = 1;
  qtdeMoedas = parseInt(resto / moeda);
  resto = resto % moeda;
  console.log(qtdeMoedas + " moeda(s) de R$ 0.0" + moeda);

  //versão 2

  const valor = lines[0];
  const valores = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];

  const resto = (valor, dinheiro) => (valor % dinheiro).toFixed(2);
  const calcularQuantidadeDinheiro = (valor, dinheiro) =>
    Math.trunc(valor / dinheiro);

  function quantidadeDinheiro(valor, dinheiro) {
    const valorDinheiro = dinheiro.map((dinheiro) => {
      const quantidade = calcularQuantidadeDinheiro(valor, dinheiro);
      valor = resto(valor, dinheiro);
      return {
        dinheiro: dinheiro,
        quantidade: quantidade,
      };
    });
    return valorDinheiro;
  }

  function resultado() {
    const dinheiro = quantidadeDinheiro(valor, valores);
    const notas = dinheiro.slice(0, 6);
    const moedas = dinheiro.slice(6, 12);

    console.log("NOTAS:");
    notas.forEach((nota) =>
      console.log(
        `${nota.quantidade} nota(s) de R$ ${nota.dinheiro.toFixed(2)}`
      )
    );

    console.log("MOEDAS:");
    moedas.forEach((moeda) =>
      console.log(
        `${moeda.quantidade} moeda(s) de R$ ${moeda.dinheiro.toFixed(2)}`
      )
    );
  }

  resultado();
}

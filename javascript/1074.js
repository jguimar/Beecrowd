const N = parseInt(lines.shift());

for (let i = 0; i < N; i++) {
  let numero = parseInt(lines.shift());
  if (numero % 2 === 0 && numero > 0) {
    console.log("EVEN POSITIVE");
  } else if (numero % 2 === 0 && numero < 0) {
    console.log("EVEN NEGATIVE");
  } else if (numero % 2 !== 0 && numero > 0) {
    console.log("ODD POSITIVE");
  } else if (numero % 2 !== 0 && numero < 0) {
    console.log("ODD NEGATIVE");
  } else {
    console.log("NULL");
  }
}

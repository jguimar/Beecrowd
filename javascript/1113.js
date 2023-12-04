let i = 0;

while (i <= 1000) {
  let input = lines.shift();
  if (!input) break;

  let [x, y] = input.split(" ").map(Number);
  if (x > y) {
    console.log("Decrescente");
  } else if (y > x) {
    console.log("Crescente");
  } else {
    break;
  }

  i++;
}

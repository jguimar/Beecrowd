while (true) {
  let [x, y] = lines.shift().split(" ").map(Number);

  if (x == 0 || y == 0) {
    break;
  } else if (x > 0 && y > 0) {
    console.log("primeiro");
  } else if (x < 0 && y > 0) {
    console.log("Segundo");
  } else if (x < 0 && y < 0) {
    console.log("terceiro");
  } else if (x > 0 && y < 0) {
    console.log("quarto");
  }
}

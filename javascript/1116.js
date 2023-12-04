let [n, x, y] = lines.shift().split(" ").map(Number);

for (let i = 0; i < n; i++) {
  if (y == 0) {
    console.log("divisao impossivel");
  } else {
    console.log((x / y).toFixed(1));
  }
}

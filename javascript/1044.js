const [a, b] = lines.split(" ").map(Number);

if (a % b == 0 || b % a == 0) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}

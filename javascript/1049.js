const categoria = lines.shift();
const familia = lines.shift();
const alimentacao = lines.shift();

if (categoria === "vertebrado") {
  if (familia === "ave") {
    if (alimentacao === "carnivoro") {
      console.log("aguia");
    } else if (alimentacao === "onivoro") {
      console.log("pomba");
    }
  } else if (familia === "mamifero") {
    if (alimentacao === "onivoro") {
      console.log("homem");
    } else if (alimentacao === "herbivoro") {
      console.log("vaca");
    }
  }
} else if (categoria === "invertebrado") {
  if (familia === "inseto") {
    if (alimentacao === "hematofago") {
      console.log("pulga");
    } else if (alimentacao === "herbivoro") {
      console.log("lagarta");
    }
  } else if (familia === "anelideo") {
    if (alimentacao === "hematofago") {
      console.log("sanguessuga");
    } else if (alimentacao === "onivoro") {
      console.log("minhoca");
    }
  }
}

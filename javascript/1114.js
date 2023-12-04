while (true) {
    let password = parseInt(lines.shift());
    if (password == 2002) {
      console.log("Acesso Permitido");
      break;
    } else {
      console.log("Senha Invalida");
    }
  }
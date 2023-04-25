let preco = prompt("Insira o valor encontrado:");

do {
  if (preco >= 100 && preco < 500){
    alert("Preço razoável!")
  } else if (preco  >= 501) {
    alert("Preço elevado!")
    break
  } else if (preco <= 500) {
    alert("Preço bom!")
  }
} while (preco > 500)
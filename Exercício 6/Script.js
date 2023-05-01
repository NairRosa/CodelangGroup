function imparOuPar() {
    let numero;

    do {
        numero = prompt("Insira um número pra saber se ele é ímpar ou par:")
        let resultado = numero % 2 
        if (resultado === 0) {
            alert("O número " + numero + "," + " é par.");
        }
        if (resultado != 0) {
            alert("O número " + numero + "," + " é ímpar.");
        }
    } while (resultado >= 0)
}

imparOuPar()

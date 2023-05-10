function imparOuPar() {
    let numero;

    do {
        numero = prompt("Insira um número pra saber se ele é ímpar ou par:")
        let resultado = numero % 2 
        
        if (numero > 0 && resultado === 0) {
            alert("O número " + numero + "," + " é positivo e par.");
        }
        else if (numero > 0 && resultado != 0) {
            alert("O número " + numero + "," + " é positivo e ímpar.");
        }
        else {
            alert("O número " + numero + "," + " é negativo.");
        }
    } while (resultado >= 0)
}

imparOuPar()

let nota = prompt("Insira sua nota escolar:");

do {
    if (nota >= 7 && nota < 10 ) {
        alert("Situação: \n" + "Aprovado.");
        break
    } if (nota == 10) {
        alert("Situação: \n" + "Aprovado com distinção.")
        break
    } else {
        alert("Situação: \n" + "Reprovado.")
        break
    }
} while (nota !== 10)


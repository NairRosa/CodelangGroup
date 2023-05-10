let genero = prompt("Qual seu genero sexual?" + "\n" +
"1. Feminino" + "\n" +
"2. Masculino" + "\n" +
"3. Outro");

switch (genero) {
    case "1": 
        alert("Você é uma mulher cis.");
        break
    case "2": 
        alert("Você é um homem cis.");
        break
    case "3": 
        let outros = "";
        if (genero == "3") {
            outros = prompt("Como você se identifca?")
            alert("Você é um(a) " + outros + ".")
        }
        break
    default:
        alert("Opção inválida.")
}


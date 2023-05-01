//let cargo = prompt("Qual a sua profissão?");

//if (cargo === cargo) {
  //  alert("Você é " + cargo + ".")
//} 

// Há um erro... preciso de uma verificação, caso seja informado uma profissão inexistente.
// também poderia fazer com o switch, mas só conseguria para de fato, profissoes especificas... segue:

let cargo = prompt("Qual a sua profissão?" + "\n" +
"1. Gerente" + "\n" +
"2. Supervisor" + "\n" +
"3. Outros");

switch (cargo){
    case "1": 
        alert("Você é gerente.")
        break
    case "2": 
        alert("Você é supervisor.")
        break
    case "3": 
        if (cargo === "3") {
            let outros = prompt("Insira sua profissão:")
            let confirma = confirm("Você é " + outros + "?")
            if (confirma) {
                alert("Você é " + outros + ".")
            }
        }
        break
    default:
        alert("Opção inválida!");
}
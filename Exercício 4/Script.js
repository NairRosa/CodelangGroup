var diasDaSemana = prompt("Informe uma opção:" + "\n" +
 "\n" + "1- ?" +
 "\n" + "2- ?" +
 "\n" + "3- ?" +
 "\n" + "4- ?" +
 "\n" + "5- ?" +
 "\n" + "6- ?" +
 "\n" + "7- ?");

switch (diasDaSemana) {
    case "1":
        alert("Segundo a opção que voce escolheu, hoje é Domingo.");
        break;
    case "2":
        alert("Segundo a opção que voce escolheu, hoje é Segunda-feira.");
        break;
    case "3":
        alert("Segundo a opção que voce escolheu, hoje é Terça-feira.");
        break;
    case "4":
        alert("Segundo a opção que voce escolheu, hoje é Quarta-feira.");
        break;
    case "5":
        alert("Segundo a opção que voce escolheu, hoje é Quinta-feira.");
        break;
    case "6":
        alert("Segundo a opção que voce escolheu, hoje é Sexta-dfeira.");
        break;
    case "7":
        alert("Segundo a opção que voce escolheu, hoje é Sabádo.");
        break;
    default: 
    alert("Opção inválida.")                                              
}

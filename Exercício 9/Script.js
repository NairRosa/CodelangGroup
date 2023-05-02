let idade = prompt("Qual a sua idade?");

if (idade >= 65) {
    alert("Você é idoso.")
}
if (idade >= 18 && idade < 65) {
    alert("Você é adulto.")
} 
if (idade < 18) {
    alert("Você é menor de idade.")
}
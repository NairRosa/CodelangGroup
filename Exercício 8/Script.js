let saldo = prompt("Qual saldo da sua carteira?");

if (saldo >= 0 && saldo < 1000) {
    alert("Saldo positivo e baixo.")
} 
if (saldo >= 1000 && saldo < 10000) {
    alert("Saldo positivo e médio.")
} 
if (saldo > 10000) {
    alert("Saldo positivo e alto.")
}
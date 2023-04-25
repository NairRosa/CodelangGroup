var nome = prompt("Insira um nome:");
let guardar = [];
let confirma = confirm("Seu nome é " + nome + "?");

function listarNomes() {
    if (confirma) {
        guardar.push(nome)
        alert("Nome inserido: " + "\n\n" + "-> " + nome);
    } else {
        listarNomes()
    }
    console.log(nome);
}

listarNomes()
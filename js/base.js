const nome = "khayla Ribeiro";
let nome2 = "";

console.log("Valor inicial:")
console.log(nome2);

nome2 = "Maria Cinda";

console.log("valor alterado:");
console.log(nome2);

function alterarNome() {
    nome2 = "Maria Silva";
    console.log("valor alterado:");
    console.log(nome2);  
  }

  function recebeEalterarNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome");
    console.log(nome2);  
  }




  recebeEalteraNome("João Pereira");
  recebeEalteraNome("Maria Silva");
  
//alterarNome();
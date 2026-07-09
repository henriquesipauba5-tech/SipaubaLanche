document
.getElementById("cadastroForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const dados = new FormData(this);

    if(
        dados.get("senha") !==
        dados.get("confirmarSenha")
    ){
        alert("As senhas não coincidem.");
        return;
    }

    console.log({
        nome: dados.get("nome"),
        email: dados.get("email"),
        telefone: dados.get("telefone"),
        senha: dados.get("senha")
    });

});
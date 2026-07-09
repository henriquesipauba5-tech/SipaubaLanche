document
.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const dados = new FormData(this);

    console.log({
        usuario: dados.get("usuario"),
        senha: dados.get("senha")
    });

});
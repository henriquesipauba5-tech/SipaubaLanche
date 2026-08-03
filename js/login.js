const btnEntrar = document.getElementById("btnEntrar");
const mensagem = document.getElementById("mensagem");

btnEntrar.addEventListener("click", async () => {

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    mensagem.innerHTML = "";
    mensagem.style.color = "red";

    if (!email || !senha) {
        mensagem.innerHTML = "Preencha todos os campos.";
        return;
    }

    if (senha.length < 8) {
        mensagem.innerHTML = "A senha deve possuir no mínimo 8 caracteres.";
        return;
    }

    btnEntrar.disabled = true;
    btnEntrar.innerHTML = "Entrando...";

    try {

        const response = await fetch("http://localhost:3000/clientes/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                senha
            })
        });

        const dados = await response.json();

        if (!response.ok || !dados.sucesso) {

            mensagem.style.color = "red";
            mensagem.innerHTML = dados.mensagem;
            return;

        }

        localStorage.setItem(
            "cliente",
            JSON.stringify(dados.cliente)
        );

        mensagem.style.color = "green";
        mensagem.innerHTML = dados.mensagem;

        setTimeout(() => {

            window.location.href = "../index.html";

        }, 1000);

    } catch (erro) {

        console.error(erro);

        mensagem.style.color = "red";
        mensagem.innerHTML = "Erro ao conectar ao servidor.";

    } finally {

        btnEntrar.disabled = false;
        btnEntrar.innerHTML = "Entrar";

    }

});
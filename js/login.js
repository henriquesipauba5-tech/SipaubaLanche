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
// =====================================================
// CONFIGURAÇÃO DO GOOGLE
// =====================================================
 
const googleClientId =
    "603763604024-ufvn5tia15c8o63gtn4e6gkks88m9t4n.apps.googleusercontent.com";
 
 
// =====================================================
// VARIÁVEL DO CLIENTE GOOGLE
// =====================================================
 
let googleClient;
 
 
// =====================================================
// AGUARDAR A BIBLIOTECA DO GOOGLE CARREGAR
// =====================================================
 
window.onload = function () {
 
    // Cria o cliente de autenticação do Google
    googleClient =
        google.accounts.oauth2.initTokenClient({
 
            client_id: googleClientId,
 
            scope: "openid email profile",
 
            callback: receberRespostaGoogle
 
        });
 
};
 
 
// =====================================================
// EVENTO DO BOTÃO
// =====================================================
 
document
    .getElementById("btn-google")
    .addEventListener(
        "click",
        function () {
 
            // Abre a janela de login do Google
            googleClient.requestAccessToken();
 
        }
    );
 
 
// =====================================================
// RECEBER RESPOSTA DO GOOGLE
// =====================================================
 
async function receberRespostaGoogle(response) {
 
    // Verifica se aconteceu algum erro
    if (response.error) {
 
        console.error(
            "Erro ao fazer login:",
            response
        );
 
        alert(
            "Não foi possível fazer login com Google."
        );
 
        return;
    }
 
 
    try {
 
        // =================================================
        // PEGAR OS DADOS DO USUÁRIO
        // =================================================
 
        const resposta =
            await fetch(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                {
 
                    headers: {
 
                        Authorization:
                            "Bearer " +
                            response.access_token
 
                    }
 
                }
            );
 
 
        const usuario =
            await resposta.json();
 
 
        // =================================================
        // MOSTRAR NO CONSOLE
        // =================================================
 
        console.log(
            "Usuário Google:",
            usuario
        );
 
 
        console.log(
            "Nome:",
            usuario.name
        );
 
 
        console.log(
            "E-mail:",
            usuario.email
        );
 
 
        console.log(
            "Foto:",
            usuario.picture
        );
 
 
        // =================================================
        // SALVAR USUÁRIO
        // =================================================
 
        localStorage.setItem(
            "usuarioGoogle",
            JSON.stringify(usuario)
        );
 
 
        // =================================================
        // MENSAGEM
        // =================================================
 
        alert(
            "Bem-vindo(a), " +
            usuario.name +
            "!"
        );
 
 
        // =================================================
        // REDIRECIONAR PARA HOME
        // =================================================
 
        window.location.href =
            "home.html";
 
 
    } catch (erro) {
 
        console.error(
            "Erro ao buscar dados do usuário:",
            erro
        );
 
 
        alert(
            "Erro ao obter os dados da conta Google."
        );
 
    }
 
}
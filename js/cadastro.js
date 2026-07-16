/*==================================================
    CADASTRO.JS
    Projeto: Sipaúba Lanches
==================================================*/

/*==========================
    TEXTOS DA TELA
==========================*/

const textos = {

    empresa: "Sipaúba Lanches",

    titulo: "Crie sua conta",

    subtitulo:
        "Preencha seus dados para criar sua conta e aproveitar nossos lanches.",

    entrar: "Entrar",

    cadastrar: "Cadastro",

    botao: "Criar minha conta",

    termos: "Termos de Uso",

    privacidade: "Política de Privacidade",

    suporte: "Suporte",

    copyright:
        "© 2026 Sipaúba Lanches - Todos os direitos reservados."

};


/*==========================
    ELEMENTOS
==========================*/

const empresaNome = document.getElementById("empresaNome");

const tituloCadastro = document.getElementById("tituloCadastro");

const subtituloCadastro = document.getElementById("subtituloCadastro");

const btnEntrarTopo = document.getElementById("btnEntrarTopo");

const btnCadastroTopo = document.getElementById("btnCadastroTopo");

const btnCriarConta = document.getElementById("btnCriarConta");

const linkTermos = document.getElementById("linkTermos");

const linkPrivacidade = document.getElementById("linkPrivacidade");

const suporte = document.getElementById("suporte");

const privacidade = document.getElementById("privacidade");

const termosRodape = document.getElementById("termosRodape");

const copyright = document.getElementById("copyright");


/*==========================
    INPUTS
==========================*/

const nome = document.getElementById("nome");

const cpf = document.getElementById("cpf");

const dataNascimento = document.getElementById("dataNascimento");

const email = document.getElementById("email");

const telefone = document.getElementById("telefone");

const senha = document.getElementById("senha");

const confirmarSenha =
document.getElementById("confirmarSenha");

const aceite = document.getElementById("aceite");

const mostrarSenha =
document.getElementById("mostrarSenha");

const mostrarConfirmarSenha =
document.getElementById("mostrarConfirmarSenha");

const formulario =
document.getElementById("formCadastro");


/*==========================
    CARREGAR TEXTOS
==========================*/

function carregarPagina(){

    empresaNome.textContent = textos.empresa;

    tituloCadastro.textContent = textos.titulo;

    subtituloCadastro.textContent = textos.subtitulo;

    btnEntrarTopo.textContent = textos.entrar;

    btnCadastroTopo.textContent = textos.cadastrar;

    btnCriarConta.textContent = textos.botao;

    linkTermos.textContent = textos.termos;

    linkPrivacidade.textContent = textos.privacidade;

    suporte.textContent = textos.suporte;

    privacidade.textContent = textos.privacidade;

    termosRodape.textContent = textos.termos;

    copyright.textContent = textos.copyright;

    nome.placeholder = "Digite seu nome completo";

    cpf.placeholder = "000.000.000-00";

    dataNascimento.placeholder = "DD/MM/AAAA";

    email.placeholder = "Digite seu e-mail";

    telefone.placeholder = "(00) 00000-0000";

    senha.placeholder = "Digite sua senha";

    confirmarSenha.placeholder =
    "Confirme sua senha";

}

carregarPagina();


/*==========================
    MOSTRAR SENHA
==========================*/

mostrarSenha.addEventListener("click",()=>{

    senha.type =
    senha.type === "password"
    ? "text"
    : "password";

});


mostrarConfirmarSenha.addEventListener("click",()=>{

    confirmarSenha.type =
    confirmarSenha.type === "password"
    ? "text"
    : "password";

});


/*==========================
    MÁSCARA CPF
==========================*/

cpf.addEventListener("input",()=>{

    let valor = cpf.value.replace(/\D/g,"");

    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /(\d{3})(\d{1,2})$/,
        "$1-$2"
    );

    cpf.value = valor;

});


/*==========================
    MÁSCARA DATA
==========================*/

dataNascimento.addEventListener("input",()=>{

    let valor =
    dataNascimento.value.replace(/\D/g,"");

    valor = valor.replace(
        /(\d{2})(\d)/,
        "$1/$2"
    );

    valor = valor.replace(
        /(\d{2})(\d)/,
        "$1/$2"
    );

    dataNascimento.value = valor;

});


/*==========================
    MÁSCARA TELEFONE
==========================*/

telefone.addEventListener("input",()=>{

    let valor =
    telefone.value.replace(/\D/g,"");

    valor = valor.replace(
        /^(\d{2})(\d)/,
        "($1) $2"
    );

    valor = valor.replace(
        /(\d{5})(\d)/,
        "$1-$2"
    );

    telefone.value = valor;

});
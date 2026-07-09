/* ===========================================================
   PAGAMENTO.JS
   Tela de Finalização de Pedido
   Todo o conteúdo é carregado via JavaScript.
=========================================================== */

// ===========================================================
// DADOS DA EMPRESA
// ===========================================================

const empresa = {
    nome: "BURGER HOUSE",
    endereco: "Rua 20, Setor Coimbra - Araguaína-TO"
};

// ===========================================================
// MENU
// ===========================================================

const menu = {
    inicio: "Início",
    pedidos: "Meus Pedidos"
};

// ===========================================================
// TÍTULO DA PÁGINA
// ===========================================================

const pagina = {
    titulo: "Finalizar Pedido",
    subtitulo: "Escolha a forma de pagamento"
};

// ===========================================================
// FORMAS DE PAGAMENTO
// Imagens devem estar na pasta assets
// ===========================================================

const formasPagamento = [

    {
        nome: "PIX",
        descricao: "Pagamento instantâneo",
        imagem: "/assets/pix.png"
    },

    {
        nome: "Cartão de Crédito",
        descricao: "Visa, MasterCard e Elo",
        imagem: "/assets/credito.png"
    },

    {
        nome: "Cartão de Débito",
        descricao: "Débito em conta",
        imagem: "/assets/debito.png"
    },

    {
        nome: "Dinheiro",
        descricao: "Pagamento na entrega",
        imagem: "/assets/dinheiro.png"
    }

];

// ===========================================================
// RESUMO DO PEDIDO
// ===========================================================

const pedido = {

    subtotal: 68.90,

    entrega: 8.00

};

pedido.total = pedido.subtotal + pedido.entrega;

// ===========================================================
// REDES SOCIAIS
// ===========================================================

const redes = [

    {
        icone: "fab fa-instagram",
        link: "#"
    },

    {
        icone: "fab fa-facebook-f",
        link: "#"
    },

    {
        icone: "fab fa-whatsapp",
        link: "#"
    }

];

// ===========================================================
// PREENCHER HEADER
// ===========================================================

document.getElementById("nomeEmpresa").textContent = empresa.nome;

document.getElementById("btnInicio").textContent = menu.inicio;

document.getElementById("btnPedidos").textContent = menu.pedidos;

// ===========================================================
// PREENCHER TÍTULO
// ===========================================================

document.getElementById("tituloPagina").textContent = pagina.titulo;

document.getElementById("subtituloPagina").textContent = pagina.subtitulo;

// ===========================================================
// FORMAS DE PAGAMENTO
// ===========================================================

const container = document.getElementById("formasPagamento");

formasPagamento.forEach((item, index) => {

    const card = document.createElement("div");

    card.className = "cardPagamento";

    card.innerHTML = `

        <img src="${item.imagem}" alt="${item.nome}">

        <div class="infoPagamento">

            <h3>${item.nome}</h3>

            <p>${item.descricao}</p>

        </div>

    `;

    card.addEventListener("click", () => {

        document
            .querySelectorAll(".cardPagamento")
            .forEach(card => card.classList.remove("ativo"));

        card.classList.add("ativo");

        formaSelecionada = item.nome;

    });

    container.appendChild(card);

});

// ===========================================================
// RESUMO
// ===========================================================

document.getElementById("subtotal").textContent =
`R$ ${pedido.subtotal.toFixed(2).replace(".", ",")}`;

document.getElementById("taxaEntrega").textContent =
`R$ ${pedido.entrega.toFixed(2).replace(".", ",")}`;

document.getElementById("totalPedido").textContent =
`R$ ${pedido.total.toFixed(2).replace(".", ",")}`;

// ===========================================================
// REDES SOCIAIS
// ===========================================================

const divRedes = document.getElementById("redesSociais");

redes.forEach(rede => {

    divRedes.innerHTML += `

        <a href="${rede.link}">

            <i class="${rede.icone}"></i>

        </a>

    `;

});

// ===========================================================
// ENDEREÇO
// ===========================================================

document.getElementById("endereco").textContent =
empresa.endereco;

// ===========================================================
// BOTÕES
// ===========================================================

document.getElementById("btnConfirmarPedido").textContent =
"CONFIRMAR PEDIDO";

document.getElementById("btnVoltarCarrinho").textContent =
"VOLTAR AO CARRINHO";

document.getElementById("btnAjuda").textContent =
"AJUDA";

// ===========================================================
// EVENTOS
// ===========================================================

let formaSelecionada = null;

// Confirmar Pedido

document
.getElementById("btnConfirmarPedido")
.addEventListener("click", () => {

    if(!formaSelecionada){

        alert("Selecione uma forma de pagamento.");

        return;

    }

    alert(`Pedido confirmado!\n\nForma de pagamento: ${formaSelecionada}`);

});

// Voltar

document
.getElementById("btnVoltarCarrinho")
.addEventListener("click", () => {

    window.location.href = "carrinho.html";

});

// Menu

document
.getElementById("btnInicio")
.addEventListener("click", () => {

    window.location.href = "index.html";

});

document
.getElementById("btnPedidos")
.addEventListener("click", () => {

    window.location.href = "pedidos.html";

});

// Ajuda

document
.getElementById("btnAjuda")
.addEventListener("click", () => {

    alert("Entre em contato pelo WhatsApp: (11) 99999-9999");

});

// Menu Hamburguer

document
.getElementById("btnMenu")
.addEventListener("click", () => {

    alert("Menu lateral em desenvolvimento.");

});
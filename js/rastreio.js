/* ===========================================
   DADOS DO PEDIDO
=========================================== */

const pedido = {

    numero: "#8842",

    tempoEstimado: "15 - 20 MIN",

    status: "Em Trânsito",

    formaPagamento: "Pagamento via PIX - Confirmado",

    entregador: {

        nome: "Ricardo Silva",

        veiculo: "Honda CG 160 - ABC-1234",

        telefone: "(62) 99999-9999"

    },

    subtotal: 50.00,

    taxaEntrega: 10.00,

    total: 60.00,

    produtos: [

        {

            nome: "ONION SUPREMO",

            descricao: "Hambúrguer artesanal, queijo, bacon, onion rings e molho especial.",

            preco: 38.00,

            imagem: "../assets/img/onion-supremo.png"

        },

        {

            nome: "BATATA + COCA COLA",

            descricao: "Batata frita crocante + Coca-Cola Lata 350ml.",

            preco: 12.00,

            imagem: "../assets/img/combo-batata-coca.png"

        }

    ]

};


/* ===========================================
   ELEMENTOS
=========================================== */

const numeroPedido = document.getElementById("numeroPedido");
const tempoEntrega = document.getElementById("tempoEntrega");
const statusTexto = document.getElementById("statusTexto");

const nomeEntregador = document.getElementById("nomeEntregador");
const veiculoEntregador = document.getElementById("veiculoEntregador");

const subtotal = document.getElementById("subtotal");
const taxa = document.getElementById("taxa");
const total = document.getElementById("total");

const formaPagamento = document.getElementById("formaPagamento");

const listaProdutos = document.getElementById("listaProdutos");
const template = document.getElementById("templateProduto");


/* ===========================================
   FORMATAR MOEDA
=========================================== */

function moeda(valor){

    return valor.toLocaleString("pt-BR",{

        style:"currency",

        currency:"BRL"

    });

}


/* ===========================================
   CARREGAR PRODUTOS
=========================================== */

function carregarProdutos(){

    listaProdutos.innerHTML="";

    pedido.produtos.forEach(produto=>{

        const clone = template.content.cloneNode(true);

        clone.querySelector(".produtoImagem").src = produto.imagem;

        clone.querySelector(".produtoImagem").alt = produto.nome;

        clone.querySelector(".produtoNome").textContent = produto.nome;

        clone.querySelector(".produtoDescricao").textContent = produto.descricao;

        clone.querySelector(".produtoPreco").textContent = moeda(produto.preco);

        listaProdutos.appendChild(clone);

    });

}


/* ===========================================
   ATUALIZAR DADOS
=========================================== */

function atualizarTela(){

    numeroPedido.textContent = "PEDIDO " + pedido.numero;

    tempoEntrega.textContent = pedido.tempoEstimado;

    statusTexto.textContent = pedido.status;

    nomeEntregador.textContent = pedido.entregador.nome;

    veiculoEntregador.textContent = pedido.entregador.veiculo;

    subtotal.textContent = moeda(pedido.subtotal);

    taxa.textContent = moeda(pedido.taxaEntrega);

    total.textContent = moeda(pedido.total);

    formaPagamento.textContent = pedido.formaPagamento;

}


/* ===========================================
   STATUS DO PEDIDO
=========================================== */

function atualizarStatus(){

    const recebido = document.getElementById("statusRecebido");

    const preparando = document.getElementById("statusPreparando");

    const entrega = document.getElementById("statusEntrega");

    const final = document.getElementById("statusFinal");

    recebido.classList.remove("ativo");
    preparando.classList.remove("ativo");
    entrega.classList.remove("ativo");
    final.classList.remove("ativo");

    switch(pedido.status){

        case "Pedido Recebido":

            recebido.classList.add("ativo");

        break;

        case "Preparando":

            recebido.classList.add("ativo");
            preparando.classList.add("ativo");

        break;

        case "Em Trânsito":

            recebido.classList.add("ativo");
            preparando.classList.add("ativo");
            entrega.classList.add("ativo");

        break;

        case "Entregue":

            recebido.classList.add("ativo");
            preparando.classList.add("ativo");
            entrega.classList.add("ativo");
            final.classList.add("ativo");

        break;

    }

}


/* ===========================================
   BOTÃO LIGAR
=========================================== */

document
.getElementById("btnLigar")
.addEventListener("click",()=>{

    window.location.href="tel:"+pedido.entregador.telefone;

});


/* ===========================================
   CHAT
=========================================== */

document
.getElementById("btnChat")
.addEventListener("click",()=>{

    alert("Abrir chat com o entregador.");

});


/* ===========================================
   AJUDA
=========================================== */

document
.getElementById("btnAjuda")
.addEventListener("click",()=>{

    alert("Central de Atendimento.");

});


/* ===========================================
   SIMULAÇÃO DE RASTREAMENTO
=========================================== */

const etapas=[

    "Pedido Recebido",

    "Preparando",

    "Em Trânsito",

    "Entregue"

];

let indice=2;

setInterval(()=>{

    indice++;

    if(indice>=etapas.length){

        indice=etapas.length-1;

        return;

    }

    pedido.status=etapas[indice];

    statusTexto.textContent=pedido.status;

    atualizarStatus();

},30000);


/* ===========================================
   INICIALIZAÇÃO
=========================================== */

carregarProdutos();

atualizarTela();

atualizarStatus();
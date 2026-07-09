// ===============================
// CONFIGURAÇÕES
// ===============================

const TAXA_ENTREGA = 10;
const DESCONTO = 6;

// ===============================
// ELEMENTOS
// ===============================

const listaCarrinho = document.querySelector("#listaCarrinho");

const subtotalElemento = document.querySelector("#subtotal");
const taxaElemento = document.querySelector("#taxaEntrega");
const descontoElemento = document.querySelector("#desconto");
const totalElemento = document.querySelector("#total");

const btnLimpar = document.querySelector("#btnLimparCarrinho");
const btnVoltar = document.querySelector("#btnVoltar");
const btnContinuar = document.querySelector("#btnContinuar");

// ===============================
// DADOS
// ===============================

let carrinho = JSON.parse(localStorage.getItem("carrinho"));

if (!carrinho) {

    carrinho = [

        {
            id:1,
            nome:"Onion Supremo",
            preco:20,
            quantidade:1
        },

        {
            id:2,
            nome:"Combo",
            preco:20,
            quantidade:1
        }

    ];

}

// ===============================
// SALVAR
// ===============================

function salvarCarrinho(){

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

}

// ===============================
// ATUALIZAR QUANTIDADES NA TELA
// ===============================

function atualizarTela(){

    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(produto=>{

        const id = Number(produto.dataset.id);

        const item = carrinho.find(p=>p.id===id);

        if(!item){

            produto.remove();
            return;

        }

        produto.querySelector(".quantidade").textContent =
        item.quantidade;

    });

    atualizarResumo();

    salvarCarrinho();

}

// ===============================
// RESUMO
// ===============================

function atualizarResumo(){

    let subtotal = 0;

    carrinho.forEach(item=>{

        subtotal += item.preco * item.quantidade;

    });

    let desconto = 0;

    if(subtotal>0){

        desconto = DESCONTO;

    }

    let total = subtotal + TAXA_ENTREGA - desconto;

    if(subtotal===0){

        total = 0;

    }

    subtotalElemento.textContent =
        "R$ " + subtotal.toFixed(2).replace(".",",");

    taxaElemento.textContent =
        subtotal===0
        ? "R$ 0,00"
        : "R$ " + TAXA_ENTREGA.toFixed(2).replace(".",",");

    descontoElemento.textContent =
        subtotal===0
        ? "R$ 0,00"
        : "-R$ " + desconto.toFixed(2).replace(".",",");

    totalElemento.textContent =
        "R$ " + total.toFixed(2).replace(".",",");

}

// ===============================
// BOTÕES + E -
// ===============================

listaCarrinho.addEventListener("click",(e)=>{

    const botao = e.target.closest("button");

    if(!botao) return;

    const produto = botao.closest(".produto");

    const id = Number(produto.dataset.id);

    const item = carrinho.find(p=>p.id===id);

    if(!item) return;

    // MAIS

    if(botao.classList.contains("btnMais")){

        item.quantidade++;

    }

    // MENOS

    if(botao.classList.contains("btnMenos")){

        item.quantidade--;

        if(item.quantidade<=0){

            carrinho = carrinho.filter(p=>p.id!==id);

        }

    }

    atualizarTela();

});

// ===============================
// LIMPAR
// ===============================

btnLimpar.addEventListener("click",()=>{

    const resposta = confirm(
        "Deseja realmente limpar o carrinho?"
    );

    if(!resposta) return;

    carrinho = [];

    listaCarrinho.innerHTML = `

        <h2 style="
        text-align:center;
        padding:60px;
        color:#777;">
        Seu carrinho está vazio.
        </h2>

    `;

    atualizarResumo();

    salvarCarrinho();

});

// ===============================
// VOLTAR
// ===============================

btnVoltar.addEventListener("click",()=>{

    history.back();

});

// ===============================
// CONTINUAR
// ===============================

btnContinuar.addEventListener("click",()=>{

    if(carrinho.length===0){

        alert("Seu carrinho está vazio.");

        return;

    }

    alert("Prosseguindo para o pagamento...");

    // window.location.href = "checkout.html";

});

// ===============================
// INICIAR
// ===============================

atualizarTela();
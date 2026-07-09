/* ============================================
   DADOS DO PEDIDO
============================================ */

const carrinho = [

    {
        nome: "ONION SUPREMO",
        descricao: "Pão brioche, hambúrguer 160g, mussarela, barbecue, bacon, anel de cebola empanado, cebola roxa e molho especial.",
        quantidade: 1,
        preco: 38.00,
        imagem: "/assets/produto1.png"
    },

    {
        nome: "COCA COLA LATA",
        descricao: "Refrigerante Coca-Cola lata.",
        quantidade: 1,
        preco: 6.00,
        imagem: "/assets/coca.png"
    }

];


/* ============================================
   CONFIGURAÇÕES
============================================ */

const taxaEntrega = 10.00;
const desconto = 6.00;


/* ============================================
   ELEMENTOS
============================================ */

const listaCarrinho = document.getElementById("listaCarrinho");

const subtotalElemento = document.getElementById("subtotal");
const taxaElemento = document.getElementById("taxaEntrega");
const descontoElemento = document.getElementById("desconto");
const totalElemento = document.getElementById("total");
const valorFinal = document.getElementById("valorFinal");

const template = document.getElementById("templateProduto");


/* ============================================
   FORMATAÇÃO
============================================ */

function dinheiro(valor){

    return valor.toLocaleString("pt-BR",{

        style:"currency",

        currency:"BRL"

    });

}


/* ============================================
   CARREGAR PRODUTOS
============================================ */

function carregarCarrinho(){

    listaCarrinho.innerHTML = "";

    carrinho.forEach(produto=>{

        const clone = template.content.cloneNode(true);

        clone.querySelector(".produtoImagem").src = produto.imagem;

        clone.querySelector(".produtoImagem").alt = produto.nome;

        clone.querySelector(".produtoNome").textContent = produto.nome;

        clone.querySelector(".produtoDescricao").textContent = produto.descricao;

        clone.querySelector(".produtoQuantidade").textContent =
            produto.quantidade + "x";

        clone.querySelector(".produtoValor").textContent =
            dinheiro(produto.preco);

        listaCarrinho.appendChild(clone);

    });

}


/* ============================================
   CALCULAR VALORES
============================================ */

function atualizarValores(){

    let subtotal = 0;

    carrinho.forEach(item=>{

        subtotal += item.preco * item.quantidade;

    });

    const total = subtotal + taxaEntrega - desconto;

    subtotalElemento.textContent = dinheiro(subtotal);

    taxaElemento.textContent = dinheiro(taxaEntrega);

    descontoElemento.textContent = "- " + dinheiro(desconto);

    totalElemento.textContent = dinheiro(total);

    valorFinal.textContent = dinheiro(total);

}


/* ============================================
   LIMPAR CARRINHO
============================================ */

document
.getElementById("btnLimparCarrinho")
.addEventListener("click",()=>{

    if(!confirm("Deseja limpar o carrinho?")) return;

    carrinho.length = 0;

    carregarCarrinho();

    atualizarValores();

});


/* ============================================
   VOLTAR
============================================ */

document
.getElementById("btnVoltar")
.addEventListener("click",()=>{

    history.back();

});


/* ============================================
   MAIS ITENS
============================================ */

document
.getElementById("btnMaisItens")
.addEventListener("click",()=>{

    window.location.href="../pages/cardapio.html";

});


/* ============================================
   TROCAR ENDEREÇO
============================================ */

document
.getElementById("btnTrocarEndereco")
.addEventListener("click",()=>{

    alert("Abrir tela de endereços.");

});


/* ============================================
   PAGAMENTO
============================================ */

document
.getElementById("btnPagamento")
.addEventListener("click",()=>{

    alert("Selecionar forma de pagamento.");

});


/* ============================================
   FINALIZAR
============================================ */

document
.getElementById("btnFinalizar")
.addEventListener("click",()=>{

    if(carrinho.length===0){

        alert("Seu carrinho está vazio.");

        return;

    }

    alert("Pedido finalizado com sucesso!");

});


/* ============================================
   INICIAR
============================================ */

carregarCarrinho();

atualizarValores();
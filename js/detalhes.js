// ===========================================
// DADOS DO PRODUTO
// ===========================================

const produto = {
    id: 1,
    nome: "ONION SUPREMO",
    preco: 25.00
};

// ===========================================
// ELEMENTOS
// ===========================================

const quantidadeProduto = document.getElementById("quantidadeProduto");
const precoProduto = document.getElementById("precoProduto");
const valorTotal = document.getElementById("valorTotal");

const btnMaisProduto = document.getElementById("maisProduto");
const btnMenosProduto = document.getElementById("menosProduto");

const btnAdicionar = document.getElementById("btnAdicionar");
const btnVoltar = document.getElementById("btnVoltar");

// ===========================================
// VARIÁVEIS
// ===========================================

let quantidade = 1;

// Lista de adicionais escolhidos

let adicionais = [];

// ===========================================
// FORMATAÇÃO
// ===========================================

function moeda(valor){

    return valor.toLocaleString("pt-BR",{

        style:"currency",
        currency:"BRL"

    });

}

// ===========================================
// PREÇO TOTAL
// ===========================================

function atualizarTotal(){

    let total = produto.preco * quantidade;

    adicionais.forEach(item=>{

        total += item.preco * item.quantidade;

    });

    quantidadeProduto.textContent = quantidade;

    valorTotal.textContent = moeda(total);

}

// ===========================================
// QUANTIDADE PRODUTO
// ===========================================

btnMaisProduto.addEventListener("click",()=>{

    quantidade++;

    atualizarTotal();

});

btnMenosProduto.addEventListener("click",()=>{

    if(quantidade>1){

        quantidade--;

        atualizarTotal();

    }

});

// ===========================================
// ADICIONAIS
// ===========================================

const lista = document.querySelectorAll(".adicional");

lista.forEach(adicional=>{

    const btnMais = adicional.querySelector(".maisAdicional");
    const btnMenos = adicional.querySelector(".menosAdicional");

    const quantidadeElemento =
        adicional.querySelector(".qtdAdicional");

    const nome =
        adicional.dataset.nome;

    const preco =
        Number(adicional.dataset.preco);

    let qtd = 1;

    quantidadeElemento.textContent = qtd;

    adicionais.push({

        nome:nome,
        preco:preco,
        quantidade:qtd

    });

    btnMais.addEventListener("click",()=>{

        qtd++;

        quantidadeElemento.textContent=qtd;

        adicionais.find(item=>item.nome===nome).quantidade=qtd;

        atualizarTotal();

    });

    btnMenos.addEventListener("click",()=>{

        if(qtd>1){

            qtd--;

            quantidadeElemento.textContent=qtd;

            adicionais.find(item=>item.nome===nome).quantidade=qtd;

            atualizarTotal();

        }

    });

});

// ===========================================
// BOTÃO ADICIONAR
// ===========================================

btnAdicionar.addEventListener("click",()=>{

    const pedido={

        produto:produto.nome,

        quantidadeProduto:quantidade,

        adicionais:adicionais,

        total:valorTotal.textContent

    };

    console.clear();

    console.log("========== PEDIDO ==========");

    console.table(pedido.adicionais);

    console.log(pedido);

    alert("Produto adicionado ao carrinho!");

});

// ===========================================
// BOTÃO VOLTAR
// ===========================================

btnVoltar.addEventListener("click",()=>{

    history.back();

});

// ===========================================
// CARRINHO
// ===========================================

document
.getElementById("btnCarrinho")
.addEventListener("click",()=>{

    alert("Abrir Carrinho");

});

// ===========================================
// INICIAR
// ===========================================

precoProduto.textContent = moeda(produto.preco);

atualizarTotal();

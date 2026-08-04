/*==================================================
                PRODUTO.JS
        Projeto: Sipaúba Lanches
==================================================*/


/*==================================================
                TEXTOS DA TELA
==================================================*/

const textos = {

    titulo: "Nossos Lanches",

    subtitulo:
    "Escolha seu lanche favorito e clique em Escolher para personalizar seu pedido."

};


/*==================================================
                PRODUTOS
==================================================*/

const produtos = [

    {

        id:1,

        nome:"ONION SUPREMO",

        descricao:
        "Pão brioche, hambúrguer 160g, mussarela,Barbecue, Bacon, Anel de cebola empanado, cebola roxa, é nosso delicioso molho especial.",

        preco:32.00,

        imagem:"../assets/produto1.png"

    },

    {

        id:2,

        nome:"LOUKÃO CAMPEÃO DE VENDAS🏆",

        descricao:
        "Pão brioche, hambúrguer 160g, mussarela, Bacon, alface, cebola, tomate, barbecue, e nosso delicioso molho especial.",

        preco:29.90,

        imagem:"../assets/produto 2.png"

    },

    {

        id:3,

        nome:"EXPLOSIVO QUEIJO",

        descricao:
        "Pão brioche, hambúrguer 160g, mussarela, bacon, 150g de mussarela empanada, e nosso delicioso molho especial.",

        preco:31.90,

        imagem:"../assets/produto 4.png"

    },

    {

        id:4,

        nome:"Duplo Cheddar",

        descricao:
        "Dois hambúrgueres, muito cheddar e bacon.",

        preco:35.90,

        imagem:"../assets/produto4.png"

    },

    {

        id:5,

        nome:"Mega Burguer",

        descricao:
        "Dois hambúrgueres, mussarela e molho da casa.",

        preco:37.90,

        imagem:"../assets/produto5.png"

    },

    {

        id:6,

        nome:"Explosivo Bacon",

        descricao:
        "Hambúrguer artesanal, bacon extra e catupiry.",

        preco:34.90,

        imagem:"../assets/produto6.png"

    }

];


/*==================================================
            PREENCHER TÍTULO
==================================================*/

document.getElementById("tituloProdutos").textContent =
textos.titulo;

document.getElementById("subtituloProdutos").textContent =
textos.subtitulo;


/*==================================================
            ÁREA DOS PRODUTOS
==================================================*/

const listaProdutos =
document.getElementById("listaProdutos");
/*==================================================
            CRIAR OS CARDS DOS PRODUTOS
==================================================*/

produtos.forEach((produto)=>{

    //==========================================
    // CARD
    //==========================================

    const card =
    document.createElement("div");

    card.className =
    "card-produto";


    //==========================================
    // IMAGEM
    //==========================================

    const imagem =
    document.createElement("img");

    imagem.src =
    produto.imagem;

    imagem.alt =
    produto.nome;


    //==========================================
    // ÁREA DAS INFORMAÇÕES
    //==========================================

    const info =
    document.createElement("div");

    info.className =
    "info-produto";


    //==========================================
    // NOME
    //==========================================

    const nome =
    document.createElement("h2");

    nome.textContent =
    produto.nome;


    //==========================================
    // DESCRIÇÃO
    //==========================================

    const descricao =
    document.createElement("p");

    descricao.textContent =
    produto.descricao;


    //==========================================
    // PREÇO
    //==========================================

    const preco =
    document.createElement("div");

    preco.className =
    "preco";

    preco.textContent =
    "R$ " + produto.preco.toFixed(2);


    //==========================================
    // BOTÃO
    //==========================================

    const botao =
    document.createElement("button");

    botao.className =
    "btn-ver-produto";

    botao.textContent =
    "Escolher";


    //==========================================
    // EVENTO DO BOTÃO
    //==========================================

    botao.addEventListener("click",()=>{

        /*
            Futuramente aqui será aberta
            a tela de detalhes do produto.

            Exemplo:

            window.location.href =
            "detalhes.html?id=" + produto.id;
        */

        alert(

            "Você escolheu:\n\n" +

            produto.nome

        );

    });


    //==========================================
    // MONTANDO O CARD
    //==========================================

    info.appendChild(nome);

    info.appendChild(descricao);

    info.appendChild(preco);

    info.appendChild(botao);

    card.appendChild(imagem);

    card.appendChild(info);

    listaProdutos.appendChild(card);

});
/*==================================================
                PRODUTO.JS
        Projeto: Sipaúba Lanches
==================================================*/


/*==================================================
                TEXTOS DA TELA
==================================================*/


const textos = {


    titulo:

    "Nosso Cardápio",



    subtitulo:

    "Escolha seu lanche ou bebida favorita e monte seu pedido."


};






/*==================================================
                PRODUTOS
==================================================*/


const produtos = [



    //==============================================
    // LANCHES
    //==============================================


    {

        id:1,

        categoria:"lanches",

        nome:"ONION SUPREMO",

        descricao:

        "Pão brioche, hambúrguer 160g, mussarela, barbecue, bacon, anel de cebola empanado e molho especial.",

        preco:32.00,

        imagem:"../assets/produto1.png"


    },



    {

        id:2,

        categoria:"lanches",

        nome:"LOUKÃO CAMPEÃO DE VENDAS 🏆",

        descricao:

        "Pão brioche, hambúrguer 160g, mussarela, bacon, alface, tomate, cebola e molho especial.",

        preco:29.90,

        imagem:"../assets/produto2.png"


    },



    {

        id:3,

        categoria:"lanches",

        nome:"EXPLOSIVO QUEIJO",

        descricao:

        "Pão brioche, hambúrguer 160g, bacon, mussarela empanada e molho especial.",

        preco:31.90,

        imagem:"../assets/produto4.png"


    },



    {

        id:4,

        categoria:"lanches",

        nome:"COMBO SOLTEIRÃO",

        descricao:

        "Dois hambúrgueres artesanais, cheddar cremoso e bacon crocante.",

        preco:30.90,

        imagem:"../assets/produto5.jpeg"


    },



    {

        id:5,

        categoria:"lanches",

        nome:"TRIO DE OURO",

        descricao:

        "Três hambúrgueres artesanais, cheddar cremoso e bacon crocante.",

        preco:87.90,

        imagem:"../assets/produto6.jpeg"


    },



    {

        id:6,

        categoria:"lanches",

        nome:"MEGA BACON",

        descricao:

        "Hambúrguer artesanal, bacon extra, catupiry e molho especial.",

        preco:34.90,

        imagem:"../assets/produto7.jpeg"


    },



    {

        id:7,

        categoria:"lanches",

        nome:"GLORIOSO",

        descricao:

        "Pão brioche, 3 hambúrgueres 160g, 3 mussarelas, cebola roxa, triplo bacon, tomate, barbecue e molho especial.",

        preco:35.90,

        imagem:"../assets/produto9.jpeg"


    },



    {

        id:8,

        categoria:"lanches",

        nome:"BATATA TURBINADA",

        descricao:

        "Batata frita crocante, cheddar e bacon crocante.",

        preco:41.90,

        imagem:"../assets/produto8.jpeg"


    },



    //==============================================
    // BEBIDAS
    //==============================================


    {

        id:9,

        categoria:"bebidas",

        nome:"COCA COLA LATA",

        descricao:

        "Coca Cola 350ml bem gelada.",

        preco:6.00,

        imagem:"../assets/coca.jpg"


    },



    {

        id:10,

        categoria:"bebidas",

        nome:"GUARANÁ LATA",

        descricao:

        "Guaraná Antarctica 350ml gelado.",

        preco:6.00,

        imagem:"../assets/guarana.jpg"


    },



    {

        id:11,

        categoria:"bebidas",

        nome:"SUCO NATURAL",

        descricao:

        "Suco natural de laranja preparado na hora.",

        preco:8.00,

        imagem:"../assets/suco.jpg"


    },



    {

        id:12,

        categoria:"bebidas",

        nome:"ÁGUA MINERAL",

        descricao:

        "Água mineral 500ml.",

        preco:3.00,

        imagem:"../assets/agua.jpg"


    }


];
/*==================================================
            ELEMENTOS DA TELA
==================================================*/


const tituloProdutos =

document.getElementById("tituloProdutos");



const subtituloProdutos =

document.getElementById("subtituloProdutos");



const listaProdutos =

document.getElementById("listaProdutos");



const botoesCategoria =

document.querySelectorAll(".btnCategoria");






/*==================================================
            INSERIR TEXTOS
==================================================*/


tituloProdutos.textContent =

textos.titulo;



subtituloProdutos.textContent =

textos.subtitulo;







/*==================================================
            FUNÇÃO MOSTRAR PRODUTOS
==================================================*/


function mostrarProdutos(lista){



    // Limpa produtos antigos

    listaProdutos.innerHTML = "";





    lista.forEach((produto)=>{



        //==========================================
        // CRIANDO CARD
        //==========================================


        const card =

        document.createElement("div");



        card.className =

        "cardProduto";






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
        // ÁREA DE INFORMAÇÕES
        //==========================================


        const info =

        document.createElement("div");



        info.className =

        "infoProduto";







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
        // BOTÃO ESCOLHER
        //==========================================


        const btnEscolher =

        document.createElement("button");



        btnEscolher.className =

        "btnEscolher";



        btnEscolher.textContent =

        "Escolher";







        btnEscolher.addEventListener("click",()=>{



            alert(

                "Você escolheu:\n\n"

                + produto.nome

            );



        });







        //==========================================
        // MONTAGEM DO CARD
        //==========================================


        info.appendChild(nome);

        info.appendChild(descricao);

        info.appendChild(preco);

        info.appendChild(btnEscolher);



        card.appendChild(imagem);

        card.appendChild(info);



        listaProdutos.appendChild(card);



    });



}







/*==================================================
        CARREGAR CATEGORIA INICIAL
            MOSTRA LANCHES
==================================================*/


const listaLanches =


produtos.filter((produto)=>{


    return produto.categoria === "lanches";


});



mostrarProdutos(listaLanches);
/*==================================================
            FILTRO DE CATEGORIAS
==================================================*/


botoesCategoria.forEach((botao)=>{



    botao.addEventListener("click",()=>{



        //==========================================
        // REMOVE BOTÃO ATIVO
        //==========================================


        const categoriaAtiva =

        document.querySelector(".btnCategoria.ativo");



        if(categoriaAtiva){

            categoriaAtiva.classList.remove("ativo");

        }






        //==========================================
        // ADICIONA ATIVO NO BOTÃO CLICADO
        //==========================================


        botao.classList.add("ativo");







        //==========================================
        // PEGA CATEGORIA ESCOLHIDA
        //==========================================


        const categoriaSelecionada =

        botao.dataset.categoria;







        //==========================================
        // FILTRA PRODUTOS
        //==========================================


        const produtosFiltrados =


        produtos.filter((produto)=>{


            return produto.categoria === categoriaSelecionada;


        });







        //==========================================
        // MOSTRA PRODUTOS
        //==========================================


        mostrarProdutos(produtosFiltrados);



    });



});







/*==================================================
            BOTÕES DO MENU
==================================================*/


const btnHome =

document.getElementById("btnHome");



const btnPromocoes =

document.getElementById("btnPromocoes");



const btnPedidos =

document.getElementById("btnPedidos");



const btnEntrar =

document.getElementById("btnEntrar");








/*==================================================
            EVENTOS DO MENU
==================================================*/


if(btnHome){


    btnHome.addEventListener("click",()=>{


        alert("Página Inicial");


    });


}





if(btnPromocoes){


    btnPromocoes.addEventListener("click",()=>{


        alert("Promoções");


    });


}





if(btnPedidos){


    btnPedidos.addEventListener("click",()=>{


        alert("Meus Pedidos");


    });


}





if(btnEntrar){


    btnEntrar.addEventListener("click",()=>{


        alert("Entrar / Cadastrar");


    });


}







/*==================================================
                RODAPÉ
==================================================*/


const textoRodape =

document.getElementById("textoRodape");



if(textoRodape){


    textoRodape.textContent =


    "ARAGUAÍNA - TO | Sipaúba Lanches © 2026";


}







const enderecoEmpresa =

document.getElementById("enderecoEmpresa");



if(enderecoEmpresa){


    enderecoEmpresa.textContent =


    "Rua 20 com  Rua 01 - Setor Coimbra, Praças Imigrantes";


}







const listaRedes =

document.getElementById("listaRedes");



if(listaRedes){



    listaRedes.innerHTML =



    `

    <a href="#" title="Instagram">

        <i class="fa-brands fa-instagram"></i>

    </a>


    <a href="#" title="Facebook">

        <i class="fa-brands fa-facebook"></i>

    </a>


    <a href="#" title="WhatsApp">

        <i class="fa-brands fa-whatsapp"></i>

    </a>

    `;



}


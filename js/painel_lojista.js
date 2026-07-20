/*=====================================================
                DASHBOARD DO LOJISTA
=====================================================*/

/*=====================================================
                DADOS TEMPORÁRIOS
=====================================================*/

const loja = {

    nome: "Sipauba Store",

    cnpj: "12.345.678/0001-90",

    endereco: "Rua das Palmeiras, 125 - Goiânia/GO",

    telefone: "(62) 99999-9999",

    email: "contato@sipaubastore.com",

    logo: "../assets/logo.png",

    foto: "../assets/logo.png"

};

/*=====================================================
                INDICADORES
=====================================================*/

const indicadores = [

    {

        titulo: "Receita Hoje",

        valor: "R$ 2.540",

        variacao: "+12%"

    },

    {

        titulo: "Pedidos Hoje",

        valor: "58",

        variacao: "+8%"

    },

    {

        titulo: "Clientes Novos",

        valor: "17",

        variacao: "+5%"

    },

    {

        titulo: "Ticket Médio",

        valor: "R$ 43",

        variacao: "+3%"

    }

];

/*=====================================================
                STATUS OPERACIONAL
=====================================================*/

const statusOperacional = [

    {

        icone: "fa-solid fa-box",

        titulo: "Produtos",

        valor: "132",

        descricao: "Produtos cadastrados"

    },

    {

        icone: "fa-solid fa-cart-shopping",

        titulo: "Pedidos",

        valor: "326",

        descricao: "Pedidos realizados"

    },

    {

        icone: "fa-solid fa-star",

        titulo: "Avaliação",

        valor: "4.9",

        descricao: "Média da loja"

    },

    {

        icone: "fa-solid fa-truck-fast",

        titulo: "Entregas",

        valor: "97%",

        descricao: "Concluídas"

    }

];

/*=====================================================
                PRODUTOS
=====================================================*/

const produtos = [

    {

        nome:"Mouse Gamer RGB",

        preco:"R$ 149,90",

        estoque:"Estoque: 28",

        imagem:"../assets/produto1.png"

    },

    {

        nome:"Teclado Mecânico",

        preco:"R$ 259,90",

        estoque:"Estoque: 16",

        imagem:"../assets/produto2.png"

    },

    {

        nome:"Headset Gamer",

        preco:"R$ 329,90",

        estoque:"Estoque: 11",

        imagem:"../assets/produto3.png"

    }

];

/*=====================================================
                FUNÇÕES
=====================================================*/

function carregarPerfil(){

    document.getElementById("logoLoja").src = loja.logo;
    document.getElementById("fotoTopo").src = loja.foto;
    document.getElementById("fotoPerfil").src = loja.foto;

    document.getElementById("nomeLojaSidebar").textContent = loja.nome;

    document.getElementById("nomeTopo").textContent = loja.nome;

    document.getElementById("nomeLoja").textContent = loja.nome;

    document.getElementById("cnpjLoja").textContent = loja.cnpj;

    document.getElementById("enderecoLoja").textContent = loja.endereco;

    document.getElementById("telefoneLoja").textContent = loja.telefone;

    document.getElementById("emailLoja").textContent = loja.email;

}

/*=====================================================
                INDICADORES
=====================================================*/

function carregarIndicadores(){

    const container = document.getElementById("cardsIndicadores");

    container.innerHTML = "";

    indicadores.forEach(indicador=>{

        const template = document
        .getElementById("templateIndicador")
        .content
        .cloneNode(true);

        template.querySelector(".tituloIndicador").textContent = indicador.titulo;

        template.querySelector(".valorIndicador").textContent = indicador.valor;

        template.querySelector(".variacaoIndicador").textContent = indicador.variacao;

        container.appendChild(template);

    });

}

/*=====================================================
                STATUS
=====================================================*/

function carregarStatus(){

    const container = document.getElementById("cardsStatus");

    container.innerHTML="";

    statusOperacional.forEach(status=>{

        const template = document
        .getElementById("templateStatus")
        .content
        .cloneNode(true);

        template.querySelector("i").className = status.icone;

        template.querySelector(".tituloStatus").textContent = status.titulo;

        template.querySelector(".valorStatus").textContent = status.valor;

        template.querySelector(".descricaoStatus").textContent = status.descricao;

        container.appendChild(template);

    });

}

/*=====================================================
                PRODUTOS
=====================================================*/

function carregarProdutos(){

    const container = document.getElementById("listaProdutos");

    container.innerHTML="";

    produtos.forEach(produto=>{

        const template = document
        .getElementById("templateProduto")
        .content
        .cloneNode(true);

        template.querySelector(".imagemProduto").src = produto.imagem;

        template.querySelector(".nomeProduto").textContent = produto.nome;

        template.querySelector(".precoProduto").textContent = produto.preco;

        template.querySelector(".estoqueProduto").textContent = produto.estoque;

        container.appendChild(template);

    });

}
// =====================================================
// CADASTRO PRODUTO - PARTE 2
// Funções de comunicação com API
// Controle de dados do produto
// =====================================================


// =====================================================
// OBJETO PRINCIPAL DO PRODUTO
// Guarda todas as informações preenchidas
// =====================================================

let produtoCadastro = {

    nome: "",
    descricao: "",
    codigo: "",
    precoAntigo: 0,
    precoPromocional: 0,
    quantidadeEstoque: 0,
    ativo: 1,
    categoria: "",
    adicional: "",
    imagens: []

};



// =====================================================
// CAPTURA DOS DADOS DO FORMULÁRIO
// =====================================================

function capturarDadosProduto() {


    produtoCadastro.nome =
        document.getElementById("nomeProduto").value;


    produtoCadastro.descricao =
        document.getElementById("descricaoProduto").value;


    produtoCadastro.codigo =
        document.getElementById("codigoProduto").value;


    produtoCadastro.precoAntigo =
        Number(
            document.getElementById("precoAntigo").value
        );


    produtoCadastro.precoPromocional =
        Number(
            document.getElementById("precoPromocional").value
        );


    produtoCadastro.quantidadeEstoque =
        Number(
            document.getElementById("quantidadeEstoque").value
        );


    produtoCadastro.categoria =
        document.getElementById("categoriaProduto").value;



    produtoCadastro.adicional =
        document.getElementById("adicionalProduto").value;



    return produtoCadastro;

}




// =====================================================
// VALIDAÇÃO ANTES DE ENVIAR
// =====================================================

function validarProduto(){


    let produto = capturarDadosProduto();



    if(produto.nome.trim() === ""){

        alert("Digite o nome do produto!");
        return false;

    }



    if(produto.descricao.trim() === ""){

        alert("Digite a descrição do produto!");
        return false;

    }



    if(produto.precoPromocional <= 0){

        alert("Informe um preço válido!");
        return false;

    }



    if(produto.quantidadeEstoque < 0){

        alert("Quantidade inválida!");
        return false;

    }



    return true;


}




// =====================================================
// ENVIO PARA BACK-END
// API NODE.JS
// =====================================================


async function cadastrarProduto(){



    if(!validarProduto()){

        return;

    }



    let dados = capturarDadosProduto();



    try{


        let resposta = await fetch(
            "http://localhost:3000/produto",
            {

                method:"POST",

                headers:{

                    "Content-Type":"application/json"

                },


                body:JSON.stringify(dados)

            }

        );



        let resultado = await resposta.json();



        console.log(resultado);



        alert(
            "Produto cadastrado com sucesso!"
        );



        limparFormulario();



    }


    catch(error){


        console.error(error);


        alert(
            "Erro ao cadastrar produto!"
        );


    }


}




// =====================================================
// LIMPAR FORMULÁRIO
// =====================================================


function limparFormulario(){



    document
    .querySelectorAll("input, textarea")
    .forEach(elemento=>{


        elemento.value="";


    });



    produtoCadastro = {

        nome:"",
        descricao:"",
        codigo:"",
        precoAntigo:0,
        precoPromocional:0,
        quantidadeEstoque:0,
        ativo:1,
        categoria:"",
        adicional:"",
        imagens:[]

    };



    let preview =
    document.getElementById(
        "previewImagem"
    );


    if(preview){

        preview.innerHTML="";

    }



}




// =====================================================
// FORMATAR PREÇO EM REAL
// =====================================================


function formatarPreco(valor){


    return Number(valor)
    .toLocaleString(
        "pt-BR",
        {

            style:"currency",
            currency:"BRL"

        }
    );


}




// =====================================================
// MOSTRAR PREÇO PROMOCIONAL
// AUTOMATICAMENTE
// =====================================================


const campoPromocao =
document.getElementById(
    "precoPromocional"
);



if(campoPromocao){


campoPromocao.addEventListener(
"input",

()=>{


let valor =
campoPromocao.value;


let visualizacao =
document.getElementById(
"valorPromocao"
);



if(visualizacao){


visualizacao.innerHTML =
formatarPreco(valor);


}


}

);


}




// =====================================================
// ATIVAR / DESATIVAR PRODUTO
// =====================================================


function alterarStatusProduto(status){


produtoCadastro.ativo = status ? 1 : 0;



let texto =
document.getElementById(
"statusProduto"
);



if(texto){


texto.innerHTML =
status
?
"Produto Ativo"
:
"Produto Inativo";


}



}




// =====================================================
// BOTÃO SALVAR
// =====================================================


const btnSalvarProduto =
document.getElementById(
"btnSalvarProduto"
);



if(btnSalvarProduto){


btnSalvarProduto.addEventListener(
"click",

()=>{


cadastrarProduto();


}

);


}



// =====================================================
// EXPORTAÇÃO
// Permite usar funções em outros arquivos
// =====================================================


window.produto = {

    cadastrarProduto,
    validarProduto,
    limparFormulario,
    alterarStatusProduto

};
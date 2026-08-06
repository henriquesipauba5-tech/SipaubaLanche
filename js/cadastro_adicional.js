//==================================================
//      cadastro_adicional.js
//      Sipaúba Lanches
//==================================================



document.addEventListener("DOMContentLoaded",()=>{



//==================================================
//                  ELEMENTOS
//==================================================



const formAdicional = 
document.getElementById("formAdicional");



const nomeAdicional = 
document.getElementById("nomeAdicional");



const descricaoAdicional = 
document.getElementById("descricaoAdicional");



const precoAdicional = 
document.getElementById("precoAdicional");



const imagemAdicional = 
document.getElementById("imagemAdicional");



const uploadArea = 
document.getElementById("uploadArea");



const btnSelecionarImagem =
document.getElementById("btnSelecionarImagem");



const previewImagem =
document.getElementById("previewImagem");



const statusAdicional =
document.getElementById("statusAdicional");



const btnCancelar =
document.getElementById("btnCancelar");



const listaAdicionaisCadastrados =
document.getElementById("listaAdicionaisCadastrados");



const quantidadeAdicionais =
document.getElementById("quantidadeAdicionais");



const campoPesquisa =
document.getElementById("campoPesquisa");



const statusSistema =
document.getElementById("statusSistema");




//==================================================
//                  VARIÁVEIS
//==================================================



let imagemSelecionada = null;



let adicionais = [];





//==================================================
//              CARREGAR ADICIONAIS
//==================================================


carregarAdicionais();





async function carregarAdicionais(){


    /*
    
    Futuramente virá do banco:

    fetch("http://localhost:3000/adicionais")

    */


    adicionais = [

        {

            id:1,

            nome:"Hambúrguer",

            descricao:"Carne artesanal",

            preco:8,

            imagem:"../assets/hamburguer.png",

            status:true

        },


        {

            id:2,

            nome:"Bacon",

            descricao:"Bacon crocante",

            preco:4,

            imagem:"../assets/bacon.png",

            status:true

        },


        {

            id:3,

            nome:"Cheddar Cremoso",

            descricao:"Molho cheddar",

            preco:3.5,

            imagem:"../assets/cheddar.png",

            status:true

        }


    ];



    mostrarAdicionais();


}






//==================================================
//              MOSTRAR ADICIONAIS
//==================================================


function mostrarAdicionais(){


    listaAdicionaisCadastrados.innerHTML="";



    quantidadeAdicionais.textContent =

    adicionais.length;





    adicionais.forEach((adicional)=>{



        const card = 
        document.createElement("div");



        card.className =
        "cardAdicionalCadastrado";





        card.innerHTML = `


        <img 
        src="${adicional.imagem}"
        alt="${adicional.nome}">



        <div class="dadosAdicional">


            <h3>

            ${adicional.nome}

            </h3>


            <p>

            R$ ${adicional.preco.toFixed(2)}

            </p>


            <span>

            ${adicional.status ? "Ativo":"Inativo"}

            </span>


        </div>



        <div class="acoes">


            <button>

            <i class="fa-solid fa-pen"></i>

            </button>



            <button>

            <i class="fa-solid fa-trash"></i>

            </button>


        </div>



        `;



        listaAdicionaisCadastrados.appendChild(card);



    });



}

//==================================================
//              SELECIONAR IMAGEM
//==================================================



btnSelecionarImagem.addEventListener("click",()=>{


    imagemAdicional.click();


});





uploadArea.addEventListener("click",(e)=>{


    if(e.target !== btnSelecionarImagem){


        imagemAdicional.click();


    }


});





imagemAdicional.addEventListener("change",()=>{


    const arquivo = 
    imagemAdicional.files[0];



    if(!arquivo){

        return;

    }



    imagemSelecionada = arquivo;



    mostrarPreview(arquivo);



});






//==================================================
//              MOSTRAR PREVIEW
//==================================================



function mostrarPreview(arquivo){



    previewImagem.innerHTML="";



    const leitor = 
    new FileReader();




    leitor.onload = (evento)=>{



        const imagem =
        document.createElement("img");



        imagem.src =
        evento.target.result;



        previewImagem.appendChild(imagem);



    };



    leitor.readAsDataURL(arquivo);



}








//==================================================
//              DRAG AND DROP
//==================================================



uploadArea.addEventListener("dragover",(e)=>{


    e.preventDefault();


    uploadArea.style.borderColor="#ff0000";


});





uploadArea.addEventListener("dragleave",()=>{


    uploadArea.style.borderColor="#ddd";


});






uploadArea.addEventListener("drop",(e)=>{


    e.preventDefault();



    const arquivo =
    e.dataTransfer.files[0];



    if(!arquivo){

        return;

    }




    imagemSelecionada = arquivo;



    mostrarPreview(arquivo);



});








//==================================================
//              CANCELAR CADASTRO
//==================================================



btnCancelar.addEventListener("click",()=>{



    const confirmar = 

    confirm("Deseja limpar o cadastro do adicional?");



    if(!confirmar){

        return;

    }




    formAdicional.reset();



    previewImagem.innerHTML="";



    imagemSelecionada=null;



});








//==================================================
//              PESQUISAR ADICIONAIS
//==================================================



campoPesquisa.addEventListener("keyup",()=>{



    const texto =

    campoPesquisa.value.toLowerCase();




    const filtrados =

    adicionais.filter((item)=>{


        return item.nome

        .toLowerCase()

        .includes(texto);


    });





    mostrarListaPesquisa(filtrados);



});







//==================================================
//          MOSTRAR RESULTADO PESQUISA
//==================================================



function mostrarListaPesquisa(lista){



    listaAdicionaisCadastrados.innerHTML="";



    quantidadeAdicionais.textContent =

    lista.length;





    lista.forEach((adicional)=>{



        const card =

        document.createElement("div");



        card.className =

        "cardAdicionalCadastrado";




        card.innerHTML = `



        <img 

        src="${adicional.imagem}"

        alt="${adicional.nome}">





        <div class="dadosAdicional">


            <h3>

            ${adicional.nome}

            </h3>



            <p>

            R$ ${adicional.preco.toFixed(2)}

            </p>



            <span>

            ${adicional.status ? "Ativo":"Inativo"}

            </span>



        </div>



        <div class="acoes">


            <button>

            <i class="fa-solid fa-pen"></i>

            </button>



            <button>

            <i class="fa-solid fa-trash"></i>

            </button>


        </div>



        `;



        listaAdicionaisCadastrados.appendChild(card);



    });



}
//==================================================
//              SALVAR ADICIONAL
//==================================================



formAdicional.addEventListener("submit",(e)=>{


    e.preventDefault();





    //==================================================
    //              PEGAR DADOS DO FORMULÁRIO
    //==================================================



    const adicional = {


        nome:

        nomeAdicional.value.trim(),



        descricao:

        descricaoAdicional.value.trim(),



        preco:

        Number(precoAdicional.value),



        status:

        statusAdicional.checked,



        imagem:

        imagemSelecionada



    };








    //==================================================
    //              VALIDAÇÕES
    //==================================================



    if(adicional.nome===""){


        alert("Informe o nome do adicional.");


        return;


    }





    if(adicional.preco <= 0 || isNaN(adicional.preco)){


        alert("Informe um preço válido.");


        return;


    }








    //==================================================
    //              FORM DATA
    //==================================================



    const dados = new FormData();



    dados.append(

        "nome",

        adicional.nome

    );



    dados.append(

        "descricao",

        adicional.descricao

    );



    dados.append(

        "preco",

        adicional.preco

    );



    dados.append(

        "status",

        adicional.status

    );






    if(adicional.imagem){


        dados.append(

            "imagem",

            adicional.imagem

        );


    }








    //==================================================
    //              ENVIO PARA NODE.JS
    //==================================================



    /*


    fetch("http://localhost:3000/adicionais",{


        method:"POST",


        body:dados


    })


    .then(res=>res.json())


    .then(resposta=>{


        alert(resposta.mensagem);



        carregarAdicionais();



    })


    .catch(()=>{


        alert("Erro ao cadastrar adicional.");


    });



    */







    //==================================================
    //              TESTE LOCAL
    //==================================================



    const novoAdicional = {


        id:

        adicionais.length + 1,



        nome:

        adicional.nome,



        descricao:

        adicional.descricao,



        preco:

        adicional.preco,



        imagem:

        adicional.imagem ?

        URL.createObjectURL(adicional.imagem)

        :

        "../assets/produto-sem-imagem.png",



        status:

        adicional.status


    };





    adicionais.push(novoAdicional);





    mostrarAdicionais();






    alert(

        "Adicional cadastrado com sucesso!"

    );







    //==================================================
    //              LIMPAR FORMULÁRIO
    //==================================================



    formAdicional.reset();



    previewImagem.innerHTML="";



    imagemSelecionada=null;



});








//==================================================
//              STATUS DO SISTEMA
//==================================================



statusSistema.textContent =

"Operacional";



statusSistema.style.color =

"#00994d";



});
//--------------------------------------------------------------
// CADASTRO DE ADICIONAIS
//--------------------------------------------------------------
//--------------------------------------------------------------
// CADASTRO DE ADICIONAIS
//--------------------------------------------------------------

document.getElementById("btnSalvar").addEventListener("click", function (e) {

    e.preventDefault();

    //--------------------------------------------------------------
    // CAPTURAR DADOS DOS INPUTS
    //--------------------------------------------------------------

    const nome = document.getElementById("nomeAdicional").value.trim();

    const descricao = document.getElementById("descricaoAdicional").value.trim();

    const preco = document.getElementById("precoAdicional").value;

   

    const imagem = document.getElementById("imagemAdicional").files[0];



    //--------------------------------------------------------------
    // VALIDAÇÕES
    //--------------------------------------------------------------

    if (nome === "") {

        alert("Por favor, informe o nome do adicional.");

        return;

    }

    if (preco === "" || Number(preco) <= 0) {

        alert("Informe um preço válido.");

        return;

    }



    //--------------------------------------------------------------
    // CRIAR FORMDATA
    //--------------------------------------------------------------

    const dados = new FormData();

    dados.append("nome", nome);

    dados.append("descricao", descricao);

    dados.append("preco", preco);


    if (imagem) {

        dados.append("imagem", imagem);

    }



    //--------------------------------------------------------------
    // ENVIAR PARA O NODE
    //--------------------------------------------------------------

    fetch("http://localhost:3000/adicionais", {

        method: "POST",

        body: dados

    })

    .then(response => response.json())

    .then(data => {

        alert(data.mensagem);

        carregarAdicionais();

        formAdicional.reset();

        previewImagem.innerHTML = "";

        imagemSelecionada = null;

    })

    .catch(error => {

        console.error(error);

        alert("Erro ao cadastrar adicional.");

    });

});
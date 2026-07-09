// CRIADO VÁRIAVEIS
/* nome des váriaveis não pode ter:
-acentos
-espaços
-simbolos
não pode começar com números 
-não deve ser escrito com a primeira letra do nome em maiusculo
*/

// variaveis que alteram de valor
let preco_promocional = 32.00;
let preco_antigo = 36.90
let desconto = "-13%";
let favoritar = false;

//variaveis que são contantes/ não alteram de valor
const nomeProduto = "EXPLOSIVO QUEIJO";
const img_principal = "/assets/produto1.png";
const descricao = "Pão brioche, hambúrguer 160g, mussarela, bacon, 150g de mussarela empanada, e nosso delicioso molho especial";
let adicional;
let frente;
const complemento = ["Hamburguer", "Presunto","Mussarela","Alface","Tomate","Batata-Palha","Bacon","Calabresa","Ovo","Milho","Frango","Salsicha","Catupiry"];
// botoes e arquivos
let btn_add_carrinho;
let btn_comprar;
let btn_add_quantidade;
let btn_remover_quantidade;
let btn_calcular_frete

//CÓDIGO PARA PREENCHER AS IMAGEM PRINCIPAL
document.getElementById("imagem-maior").src = img_principal;


//----------------------------- PREENCHER DADOS DO PRODUTO -----------------------------------//
document.getElementById("nome-produto").textContent = nomeProduto;
document.getElementById("preco-antigo").textContent = preco_antigo;
document.getElementById("preco-promocional").textContent = preco_promocional;
document.getElementById("desconto").textContent = desconto;

//----------------------------- COMPLEMENTOS DO PRODUTO -----------------------------------------//
// ELE VAI LER QUANTOS COMPLEMENTOS O PRODUTO E 
//VAI CRIAR BOTOES PARA AS CORES 
const listaComplemento = document.getElementById("complementos");

complemento.forEach(complemento => { // percorrer os complementos cadastrados
    const botao = document.createElement("button");
    // CRIAR UM BOTAO PARA CADA COMPLEMENTO QUE ELE ENCONTRAR
    botao.textContent = complemento;
    listaComplemento.appendChild(botao);

});

//----------------------- QUANTIDADE DE PRODUTO-------------------------------//
/* O LIMITE DE QUANTIDADE VAI SER IGUAL A QUANTIDADE DE PRODUTOS QUE O LOJISTA CAASTROU NO ESTOQUE.
QUANDO O CLIENTE CLICAR NO BOTÃO = A QUANTIDADE COMPRADAD AUMENTA DE 1 EM 1.
QUANDO ELE CLICAR NO BOTAO DE - A QUANTIDADE COMPRADA DIMINIUI DE 1 EM 1 
INICIALMENTE O VALOR DA QUANTIDADE APARECE COMO 1. */

let quantidade_inicial = 1; // CRIAR A QUANTIDADE INICIAL.
// CHAMAR OS BOTÕES E PASSAR O ID DO HTML DENTRO DELES
btn_add_quantidade = document.getElementById("aumentar");
btn_remover_quantidade = document.getElementById("diminuir");
const numero = document.getElementById("numero-quantidade");
numero.textContent = quantidade_inicial;


// CRIANDO O CÓDIGO DE AUMENTAR A QUANTIDADE DE 1 EM 1
btn_add_quantidade.addEventListener("click", () => {
    quantidade_inicial++;//aumentar de 1 em 1
    numero.textContent = quantidade_inicial;
});


// CRIANDO O CÓDIGO DE DIMINUIR A QUANTIDADE DE 1 EM 1
btn_remover_quantidade.addEventListener("click", () => {
    if (quantidade_inicial > 1) {
        quantidade_inicial--;//diminuir de 1 em 1
        numero.textContent = quantidade_inicial;
    }
});
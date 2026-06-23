// CRIADO VÁRIAVEIS
/* nome des váriaveis não pode ter:
-acentos
-espaços
-simbolos
não pode começar com números 
-não deve ser escrito com a primeira letra do nome em maiusculo
*/

// variaveis que alteram de valor
let preco_promocional=32.00;
let preco_antigo= 36.90
let desconto= "-13%";
let favoritar=false;

//variaveis que são contantes/ não alteram de valor
const nomeProduto="EXPLOSIVO QUEIJO";
const img_principal="/assets/produto1.png";
const descricao="Pão brioche, hambúrguer 160g, mussarela, bacon, 150g de mussarela empanada, e nosso delicioso molho especial";
let adicional;
let frente;
// botoes e arquivos
let btn_add_carrinho;
let btn_comprar;
let btn_add_quantidade;
let btn_remover_quantidade;
let btn_calcular_frete

//CÓDIGO PARA PREENCHER AS IMAGEM PRINCIPAL
document.getElementById("imagem-maior").src= img_principal;


//----------------------------- PREENCHER DADOS DO PRODUTO -----------------------------------//
document.getElementById("nome-produto").textContent = nomeProduto;
document.getElementById("preco-antigo").textContent = preco_antigo;
document.getElementById("preco-promocional").textContent = preco_promocional;
document.getElementById("desconto").textContent = desconto;

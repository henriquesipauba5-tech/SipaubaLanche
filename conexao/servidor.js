// =====================================================
// IMPORTAÇÕES
// =====================================================

// express é um framework para criar servidores web
const express = require("express");

// cors permite requisições de outros domínios
const cors = require("cors");


// Criando aplicação
const app = express();


// Middlewares
app.use(cors());
app.use(express.json());


// Conexão com banco
const conexao = require("./conexao");


// =====================================================
// ROTAS PRINCIPAIS
// =====================================================


// =========================
// ENDEREÇO
// =========================

const enderecoRotas = require("./routes/endereco_rotas.js");

app.use("/enderecos", enderecoRotas);


// =========================
// CLIENTE
// =========================

const clienteRotas = require("./routes/cliente_rotas.js");

app.use("/clientes", clienteRotas);


// =========================
// CATEGORIA
// =========================

const categoriaRotas = require("./routes/categoria_rotas.js");

app.use("/categorias", categoriaRotas);


// =========================
// ADICIONAL
// =========================

const adicionalRotas = require("./routes/adicional_rotas.js");

app.use("/adicionais", adicionalRotas);


// =========================
// PRODUTO
// =========================

const produtoRotas = require("./routes/produto_rotas.js");

app.use("/produtos", produtoRotas);


// =========================
// IMAGEM PRODUTO
// =========================

const imagemProdutoRotas = require("./routes/imagem_produto_rotas.js");

app.use("/imagens-produtos", imagemProdutoRotas);


// =========================
// BANNER
// =========================

const bannerRotas = require("./routes/banner_rotas.js");

app.use("/banners", bannerRotas);


// =========================
// CUPOM
// =========================

const cupomRotas = require("./routes/cupom_rotas.js");

app.use("/cupons", cupomRotas);


// =========================
// CARRINHO
// =========================

const carrinhoRotas = require("./routes/carrinho_rotas.js");

app.use("/carrinhos", carrinhoRotas);


// =========================
// PROMOÇÃO
// =========================

const promocaoRotas = require("./routes/promocao_rotas.js");

app.use("/promocoes", promocaoRotas);


// =========================
// FORMAS PAGAMENTO
// =========================

const formasPagamentoRotas = require("./routes/formas_pagamentos_rotas.js");

app.use("/formas-pagamento", formasPagamentoRotas);


// =========================
// PEDIDOS
// =========================

const pedidosRotas = require("./routes/pedidos_rotas.js");

app.use("/pedidos", pedidosRotas);


// =====================================================
// ROTAS ADICIONAIS
// =====================================================


// =========================
// CARTÃO PAGAMENTO
// =========================

const cartaoPagamentosRotas = require("./routes/cartao_pagamentos_rotas.js");

app.use("/cartoes", cartaoPagamentosRotas);


// =========================
// FRETE
// =========================

const freteRotas = require("./routes/frete_rotas.js");

app.use("/fretes", freteRotas);


// =========================
// ENDERECO HAS CLIENTE
// =========================

const enderecoHasClientesRotas = require("./routes/endereco_has_clientes_rotas.js");

app.use("/enderecos-clientes", enderecoHasClientesRotas);


// =========================
// CARRINHO HAS PRODUTO
// =========================

const carrinhoHasProdutoRotas = require("./routes/carrinho_has_produto_rotas.js");

app.use("/carrinhos-produtos", carrinhoHasProdutoRotas);


// =========================
// BANNER HAS PRODUTO
// =========================

const bannerHasProdutosRotas = require("./routes/banner_has_produtos_rotas.js");

app.use("/banners-produtos", bannerHasProdutosRotas);


// =========================
// CUPOM HAS PRODUTO
// =========================

const cupomHasProdutoRotas = require("./routes/cupom_has_produto_rotas.js");

app.use("/cupons-produtos", cupomHasProdutoRotas);


// =========================
// CUPOM HAS CATEGORIA
// =========================

const cupomHasCategoriaRotas = require("./routes/cupom_has_categoria_rotas.js");

app.use("/cupons-categorias", cupomHasCategoriaRotas);


// =========================
// PROMOCAO HAS PRODUTO
// =========================

const promocaoHasProdutoRotas = require("./routes/promocoes_has_produto_rotas.js");

app.use("/promocoes-produtos", promocaoHasProdutoRotas);


// =========================
// CATEGORIA HAS PROMOCAO
// =========================

const categoriaHasPromocoesRotas = require("./routes/categoria_has_promocoes_rotas.js");

app.use("/categorias-promocoes", categoriaHasPromocoesRotas);


// =========================
// PEDIDOS HAS PRODUTO
// =========================

const pedidosHasProdutosRotas = require("./routes/pedidos_has_produtos_rotas.js");

app.use("/pedidos-produtos", pedidosHasProdutosRotas);



// =====================================================
// INICIAR SERVIDOR
// =====================================================

app.listen(3000, () => {

    console.log("Servidor iniciado na porta 3000!");

});
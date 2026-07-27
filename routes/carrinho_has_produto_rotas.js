// =====================================================
// ROTAS DE CARRINHO HAS PRODUTO
// =====================================================
//
// POST    /carrinhos-produtos                       -> Cadastrar relacionamento
// GET     /carrinhos-produtos                       -> Listar relacionamentos
// GET     /carrinhos-produtos/:carrinho/:produto    -> Buscar relacionamento
// DELETE  /carrinhos-produtos/:carrinho/:produto    -> Excluir relacionamento
//
// =====================================================


const express = require("express");

const router = express.Router();


// Importando Controller
const CarrinhoHasProdutoController = require("../controller/carrinho_has_produto_controller.js");


// =========================
// CADASTRAR RELACIONAMENTO
// =========================

router.post(
    "/",
    CarrinhoHasProdutoController.cadastrar
);


// =========================
// LISTAR RELACIONAMENTOS
// =========================

router.get(
    "/",
    CarrinhoHasProdutoController.listar
);


// =========================
// BUSCAR RELACIONAMENTO
// =========================

router.get(
    "/:carrinhoId/:produtoId",
    CarrinhoHasProdutoController.buscar
);


// =========================
// EXCLUIR RELACIONAMENTO
// =========================

router.delete(
    "/:carrinhoId/:produtoId",
    CarrinhoHasProdutoController.excluir
);


// Exportando rotas
module.exports = router;
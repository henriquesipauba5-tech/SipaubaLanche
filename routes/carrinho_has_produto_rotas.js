const express = require("express");

const router = express.Router();

const CarrinhoHasProdutoController = require(
    "../controller/carrinho_has_produto_controller.js"
);

// CADASTRAR
router.post(
    "/",
    CarrinhoHasProdutoController.cadastrar
);

// LISTAR
router.get(
    "/",
    CarrinhoHasProdutoController.listar
);

// BUSCAR PRODUTOS DO CARRINHO
router.get(
    "/carrinho/:carrinhoId",
    CarrinhoHasProdutoController.buscarPorCarrinho
);

// BUSCAR CARRINHOS DO PRODUTO
router.get(
    "/produto/:produtoId",
    CarrinhoHasProdutoController.buscarPorProduto
);

// BUSCAR RELACIONAMENTO
router.get(
    "/:carrinhoId/:produtoId",
    CarrinhoHasProdutoController.buscar
);

// ATUALIZAR RELACIONAMENTO
router.put(
    "/:carrinhoId/:produtoId",
    CarrinhoHasProdutoController.atualizar
);

// EXCLUIR
router.delete(
    "/:carrinhoId/:produtoId",
    CarrinhoHasProdutoController.excluir
);

module.exports = router;

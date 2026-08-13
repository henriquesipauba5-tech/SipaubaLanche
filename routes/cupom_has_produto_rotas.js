const express = require("express");

const router = express.Router();

const CupomHasProdutoController = require(
    "../controller/cupom_has_produto_controller.js"
);

// CADASTRAR
router.post(
    "/",
    CupomHasProdutoController.cadastrar
);

// LISTAR
router.get(
    "/",
    CupomHasProdutoController.listar
);

// BUSCAR PRODUTOS DO CUPOM
router.get(
    "/cupom/:cupomId",
    CupomHasProdutoController.buscarPorCupom
);

// BUSCAR CUPONS DO PRODUTO
router.get(
    "/produto/:produtoId",
    CupomHasProdutoController.buscarPorProduto
);

// BUSCAR RELACIONAMENTO
router.get(
    "/:cupomId/:produtoId",
    CupomHasProdutoController.buscar
);

// EXCLUIR
router.delete(
    "/:cupomId/:produtoId",
    CupomHasProdutoController.excluir
);

module.exports = router;

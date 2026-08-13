const express = require("express");

const router = express.Router();

const FormasPagamentoController = require(
    "../controller/formas_pagamento_controller.js"
);

// CADASTRAR
router.post(
    "/",
    FormasPagamentoController.cadastrar
);

// LISTAR
router.get(
    "/",
    FormasPagamentoController.listar
);

// BUSCAR POR NOME
router.get(
    "/nome/:nome",
    FormasPagamentoController.buscarPorNome
);

// BUSCAR POR ID
router.get(
    "/:id",
    FormasPagamentoController.buscarPorId
);

// ATUALIZAR
router.put(
    "/:id",
    FormasPagamentoController.atualizar
);

// EXCLUIR
router.delete(
    "/:id",
    FormasPagamentoController.excluir
);

module.exports = router;

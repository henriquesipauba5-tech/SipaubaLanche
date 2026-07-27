// =====================================================
// ROTAS DE CARTÃO DE PAGAMENTO
// =====================================================
//
// POST    /cartoes-pagamento       -> Cadastrar cartão
// GET     /cartoes-pagamento       -> Listar cartões
// GET     /cartoes-pagamento/:id   -> Buscar cartão por ID
// PUT     /cartoes-pagamento/:id   -> Atualizar cartão
// DELETE  /cartoes-pagamento/:id   -> Excluir cartão
//
// =====================================================


const express = require("express");

// Criando o roteador do Express
const router = express.Router();


// Importando Controller de Cartão de Pagamento
const CartaoPagamentoController = require("../controller//cartao_pagamento_controller");


// =========================
// CADASTRAR CARTÃO
// =========================

router.post(
    "/",
    CartaoPagamentoController.cadastrar
);


// =========================
// LISTAR CARTÕES
// =========================

router.get(
    "/",
    CartaoPagamentoController.listar
);


// =========================
// BUSCAR CARTÃO POR ID
// =========================

router.get(
    "/:id",
    CartaoPagamentoController.buscarPorId
);


// =========================
// ATUALIZAR CARTÃO
// =========================

router.put(
    "/:id",
    CartaoPagamentoController.atualizar
);


// =========================
// EXCLUIR CARTÃO
// =========================

router.delete(
    "/:id",
    CartaoPagamentoController.excluir
);


// Exportando as rotas
module.exports = router;
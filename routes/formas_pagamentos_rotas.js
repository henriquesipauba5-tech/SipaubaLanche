// =====================================================
// ROTAS DE FORMAS DE PAGAMENTO
// =====================================================
//
// POST    /formas-pagamento       -> Cadastrar forma de pagamento
// GET     /formas-pagamento       -> Listar formas de pagamento
// GET     /formas-pagamento/:id   -> Buscar forma de pagamento por ID
// PUT     /formas-pagamento/:id   -> Atualizar forma de pagamento
// DELETE  /formas-pagamento/:id   -> Excluir forma de pagamento
//
// =====================================================


const express = require("express");

// Criando o roteador do Express
const router = express.Router();


// Importando Controller de Formas de Pagamento
const FormasPagamentoController = require("../controller/formasPagamento_controller.js");


// =========================
// CADASTRAR FORMA DE PAGAMENTO
// =========================

router.post(
    "/",
    FormasPagamentoController.cadastrar
);


// =========================
// LISTAR FORMAS DE PAGAMENTO
// =========================

router.get(
    "/",
    FormasPagamentoController.listar
);


// =========================
// BUSCAR POR ID
// =========================

router.get(
    "/:id",
    FormasPagamentoController.buscarPorId
);


// =========================
// ATUALIZAR FORMA DE PAGAMENTO
// =========================

router.put(
    "/:id",
    FormasPagamentoController.atualizar
);


// =========================
// EXCLUIR FORMA DE PAGAMENTO
// =========================

router.delete(
    "/:id",
    FormasPagamentoController.excluir
);


// Exportando as rotas
module.exports = router;
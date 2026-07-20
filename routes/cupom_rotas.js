// =====================================================
// ROTAS DE CUPOM
// =====================================================
//
// POST    /cupons       -> Cadastrar cupom
// GET     /cupons       -> Listar cupons
// GET     /cupons/:id   -> Buscar cupom por ID
// PUT     /cupons/:id   -> Atualizar cupom
// DELETE  /cupons/:id   -> Excluir cupom
//
// =====================================================


const express = require("express");

// Criando o roteador do Express
const router = express.Router();


// Importando Controller de Cupom
const CupomController = require("../controller/cupom_controller.js");


// =========================
// CADASTRAR CUPOM
// =========================

router.post(
    "/",
    CupomController.cadastrar
);


// =========================
// LISTAR CUPONS
// =========================

router.get(
    "/",
    CupomController.listar
);


// =========================
// BUSCAR CUPOM POR ID
// =========================

router.get(
    "/:id",
    CupomController.buscarPorId
);


// =========================
// ATUALIZAR CUPOM
// =========================

router.put(
    "/:id",
    CupomController.atualizar
);


// =========================
// EXCLUIR CUPOM
// =========================

router.delete(
    "/:id",
    CupomController.excluir
);


// Exportando as rotas
module.exports = router;
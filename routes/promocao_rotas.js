// =====================================================
// ROTAS DE PROMOÇÃO
// =====================================================
//
// POST    /promocoes       -> Cadastrar promoção
// GET     /promocoes       -> Listar promoções
// GET     /promocoes/:id   -> Buscar promoção por ID
// PUT     /promocoes/:id   -> Atualizar promoção
// DELETE  /promocoes/:id   -> Excluir promoção
//
// =====================================================


const express = require("express");

// Criando o roteador do Express
const router = express.Router();


// Importando Controller de Promoção
const PromocaoController = require("../controller/promocao_controller.js");


// =========================
// CADASTRAR PROMOÇÃO
// =========================

router.post(
    "/",
    PromocaoController.cadastrar
);


// =========================
// LISTAR PROMOÇÕES
// =========================

router.get(
    "/",
    PromocaoController.listar
);


// =========================
// BUSCAR PROMOÇÃO POR ID
// =========================

router.get(
    "/:id",
    PromocaoController.buscarPorId
);


// =========================
// ATUALIZAR PROMOÇÃO
// =========================

router.put(
    "/:id",
    PromocaoController.atualizar
);


// =========================
// EXCLUIR PROMOÇÃO
// =========================

router.delete(
    "/:id",
    PromocaoController.excluir
);


// Exportando as rotas
module.exports = router;
// =====================================================
// ROTAS DE ADICIONAL
// =====================================================
//
// POST    /adicionais       -> Cadastrar adicional
// GET     /adicionais       -> Listar adicionais
// GET     /adicionais/:id   -> Buscar adicional por ID
// PUT     /adicionais/:id   -> Atualizar adicional
// DELETE  /adicionais/:id   -> Excluir adicional
//
// =====================================================


const express = require("express");

// Criando o roteador do Express
const router = express.Router();


// Importando Controller de Adicional
const AdicionalController = require("../controller/adicional_controller.js");


// =========================
// CADASTRAR ADICIONAL
// =========================

router.post(
    "/",
    AdicionalController.cadastrar
);


// =========================
// LISTAR ADICIONAIS
// =========================

router.get(
    "/",
    AdicionalController.listar
);


// =========================
// BUSCAR ADICIONAL POR ID
// =========================

router.get(
    "/:id",
    AdicionalController.buscarPorId
);


// =========================
// ATUALIZAR ADICIONAL
// =========================

router.put(
    "/:id",
    AdicionalController.atualizar
);


// =========================
// EXCLUIR ADICIONAL
// =========================

router.delete(
    "/:id",
    AdicionalController.excluir
);


// Exportando as rotas
module.exports = router;
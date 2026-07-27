// =====================================================
// ROTAS DE FRETE
// =====================================================
//
// POST    /fretes       -> Cadastrar frete
// GET     /fretes       -> Listar fretes
// GET     /fretes/:id   -> Buscar frete por ID
// PUT     /fretes/:id   -> Atualizar frete
// DELETE  /fretes/:id   -> Excluir frete
//
// =====================================================


const express = require("express");

// Criando o roteador do Express
const router = express.Router();


// Importando Controller de Frete
const FreteController = require("../controller/endereco_controller");


// =========================
// CADASTRAR FRETE
// =========================

router.post(
    "/",
    FreteController.cadastrar
);


// =========================
// LISTAR FRETES
// =========================

router.get(
    "/",
    FreteController.listar
);


// =========================
// BUSCAR FRETE POR ID
// =========================

router.get(
    "/:id",
    FreteController.buscarPorId
);


// =========================
// ATUALIZAR FRETE
// =========================

router.put(
    "/:id",
    FreteController.atualizar
);


// =========================
// EXCLUIR FRETE
// =========================

router.delete(
    "/:id",
    FreteController.excluir
);


// Exportando as rotas
module.exports = router;
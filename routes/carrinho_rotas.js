// =====================================================
// ROTAS DE CARRINHO
// =====================================================
//
// POST    /carrinhos       -> Cadastrar carrinho
// GET     /carrinhos       -> Listar carrinhos
// GET     /carrinhos/:id   -> Buscar carrinho por ID
// PUT     /carrinhos/:id   -> Atualizar carrinho
// DELETE  /carrinhos/:id   -> Excluir carrinho
//
// =====================================================


const express = require("express");

// Criando o roteador do Express
const router = express.Router();


// Importando Controller de Carrinho
const CarrinhoController = require("../controller/carrinho_controller.js");


// =========================
// CADASTRAR CARRINHO
// =========================

router.post(
    "/",
    CarrinhoController.cadastrar
);


// =========================
// LISTAR CARRINHOS
// =========================

router.get(
    "/",
    CarrinhoController.listar
);


// =========================
// BUSCAR CARRINHO POR ID
// =========================

router.get(
    "/:id",
    CarrinhoController.buscarPorId
);


// =========================
// ATUALIZAR CARRINHO
// =========================

router.put(
    "/:id",
    CarrinhoController.atualizar
);


// =========================
// EXCLUIR CARRINHO
// =========================

router.delete(
    "/:id",
    CarrinhoController.excluir
);


// Exportando as rotas
module.exports = router;
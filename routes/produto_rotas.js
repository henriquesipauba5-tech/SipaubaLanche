// =====================================================
// ROTAS DE PRODUTO
// =====================================================
//
// POST    /produtos       -> Cadastrar produto
// GET     /produtos       -> Listar produtos
// GET     /produtos/:id   -> Buscar produto por ID
// PUT     /produtos/:id   -> Atualizar produto
// DELETE  /produtos/:id   -> Excluir produto
//
// =====================================================


const express = require("express");

// Criando o roteador do Express
const router = express.Router();


// Importando Controller de Produto
const ProdutoController = require("../controller/produto_controller.js");


// =========================
// CADASTRAR PRODUTO
// =========================

router.post(
    "/",
    ProdutoController.cadastrar
);


// =========================
// LISTAR PRODUTOS
// =========================

router.get(
    "/",
    ProdutoController.listar
);


// =========================
// BUSCAR PRODUTO POR ID
// =========================

router.get(
    "/:id",
    ProdutoController.buscarPorId
);


// =========================
// ATUALIZAR PRODUTO
// =========================

router.put(
    "/:id",
    ProdutoController.atualizar
);


// =========================
// EXCLUIR PRODUTO
// =========================

router.delete(
    "/:id",
    ProdutoController.excluir
);


// Exportando as rotas
module.exports = router;
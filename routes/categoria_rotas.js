// =====================================================
// ROTAS DE CATEGORIA
// =====================================================
//
// POST    /categorias       -> Cadastrar categoria
// GET     /categorias       -> Listar categorias
// GET     /categorias/:id   -> Buscar categoria por ID
// PUT     /categorias/:id   -> Atualizar categoria
// DELETE  /categorias/:id   -> Excluir categoria
//
// =====================================================


const express = require("express");

// Criando o roteador do Express
const router = express.Router();


// Importando Controller de Categoria
const CategoriaController = require("../controller/categoria_controller.js");


// =========================
// CADASTRAR CATEGORIA
// =========================

router.post(
    "/",
    CategoriaController.cadastrar
);


// =========================
// LISTAR CATEGORIAS
// =========================

router.get(
    "/",
    CategoriaController.listar
);


// =========================
// BUSCAR CATEGORIA POR ID
// =========================

router.get(
    "/:id",
    CategoriaController.buscarPorId
);


// =========================
// ATUALIZAR CATEGORIA
// =========================

router.put(
    "/:id",
    CategoriaController.atualizar
);


// =========================
// EXCLUIR CATEGORIA
// =========================

router.delete(
    "/:id",
    CategoriaController.excluir
);


// Exportando as rotas
module.exports = router;
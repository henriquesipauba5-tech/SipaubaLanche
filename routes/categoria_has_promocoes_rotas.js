// =====================================================
// ROTAS DE CATEGORIA HAS PROMOCAO
// =====================================================
//
// POST    /categorias-promocoes                         -> Cadastrar relacionamento
// GET     /categorias-promocoes                         -> Listar relacionamentos
// GET     /categorias-promocoes/:categoria/:promocao    -> Buscar relacionamento
// DELETE  /categorias-promocoes/:categoria/:promocao    -> Excluir relacionamento
//
// =====================================================


const express = require("express");

const router = express.Router();


// Importando Controller
const CategoriaHasPromocaoController = require("../controller/categoria_has_promocao_controller.js");


// =========================
// CADASTRAR RELACIONAMENTO
// =========================

router.post(
    "/",
    CategoriaHasPromocaoController.cadastrar
);


// =========================
// LISTAR RELACIONAMENTOS
// =========================

router.get(
    "/",
    CategoriaHasPromocaoController.listar
);


// =========================
// BUSCAR RELACIONAMENTO
// =========================

router.get(
    "/:categoria/:promocao",
    CategoriaHasPromocaoController.buscarPorId
);


// =========================
// EXCLUIR RELACIONAMENTO
// =========================

router.delete(
    "/:categoria/:promocao",
    CategoriaHasPromocaoController.excluir
);


// Exportando rotas
module.exports = router;
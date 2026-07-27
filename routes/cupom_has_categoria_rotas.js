// =====================================================
// ROTAS DE CUPOM HAS CATEGORIA
// =====================================================
//
// POST    /cupons-categorias                         -> Cadastrar relacionamento
// GET     /cupons-categorias                         -> Listar relacionamentos
// GET     /cupons-categorias/:cupom/:categoria       -> Buscar relacionamento
// DELETE  /cupons-categorias/:cupom/:categoria       -> Excluir relacionamento
//
// =====================================================


const express = require("express");

const router = express.Router();


// Importando Controller
const CupomHasCategoriaController = require("../controller/cupom_has_categoria_controller.js");


// =========================
// CADASTRAR RELACIONAMENTO
// =========================

router.post(
    "/",
    CupomHasCategoriaController.cadastrar
);


// =========================
// LISTAR RELACIONAMENTOS
// =========================

router.get(
    "/",
    CupomHasCategoriaController.listar
);


// =========================
// BUSCAR RELACIONAMENTO
// =========================

router.get(
    "/:cupomId/:categoriaId",
    CupomHasCategoriaController.buscar
);


// =========================
// EXCLUIR RELACIONAMENTO
// =========================

router.delete(
    "/:cupom/:categoria",
    CupomHasCategoriaController.excluir
);


// Exportando rotas
module.exports = router;
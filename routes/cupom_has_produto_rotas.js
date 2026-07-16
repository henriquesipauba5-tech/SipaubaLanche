// =====================================================
// ROTAS DE CUPOM HAS PRODUTO
// =====================================================
//
// POST    /cupons-produtos                    -> Cadastrar relacionamento
// GET     /cupons-produtos                    -> Listar relacionamentos
// GET     /cupons-produtos/:cupom/:produto    -> Buscar relacionamento
// DELETE  /cupons-produtos/:cupom/:produto    -> Excluir relacionamento
//
// =====================================================


const express = require("express");

const router = express.Router();


// Importando Controller
const CupomHasProdutoController = require("../controller/cupom_has_produto_controller.js");


// =========================
// CADASTRAR RELACIONAMENTO
// =========================

router.post(
    "/",
    CupomHasProdutoController.cadastrar
);


// =========================
// LISTAR RELACIONAMENTOS
// =========================

router.get(
    "/",
    CupomHasProdutoController.listar
);


// =========================
// BUSCAR RELACIONAMENTO
// =========================

router.get(
    "/:cupom/:produto",
    CupomHasProdutoController.buscarPorId
);


// =========================
// EXCLUIR RELACIONAMENTO
// =========================

router.delete(
    "/:cupom/:produto",
    CupomHasProdutoController.excluir
);


// Exportando rotas
module.exports = router;
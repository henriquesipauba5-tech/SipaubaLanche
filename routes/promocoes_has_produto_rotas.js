// =====================================================
// ROTAS DE PROMOCAO HAS PRODUTO
// =====================================================
//
// POST    /promocoes-produtos                      -> Cadastrar relacionamento
// GET     /promocoes-produtos                      -> Listar relacionamentos
// GET     /promocoes-produtos/:promocao/:produto   -> Buscar relacionamento
// DELETE  /promocoes-produtos/:promocao/:produto   -> Excluir relacionamento
//
// =====================================================


const express = require("express");

const router = express.Router();


// Importando Controller
const PromocaoHasProdutoController = require("../controller/promocoes_has_produto_controller");


// =========================
// CADASTRAR RELACIONAMENTO
// =========================

router.post(
    "/",
    PromocaoHasProdutoController.cadastrar
);


// =========================
// LISTAR RELACIONAMENTOS
// =========================

router.get(
    "/",
    PromocaoHasProdutoController.listar
);


// =========================
// BUSCAR RELACIONAMENTO
// =========================

router.get(
    "/:promocao/:produto",
    PromocaoHasProdutoController.buscar
);


// =========================
// EXCLUIR RELACIONAMENTO
// =========================

router.delete(
    "/:promocao/:produto",
    PromocaoHasProdutoController.excluir
);


// Exportando rotas
module.exports = router;
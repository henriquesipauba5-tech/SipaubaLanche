// =====================================================
// ROTAS DE BANNER HAS PRODUTO
// =====================================================
//
// POST    /banners-produtos                    -> Cadastrar relacionamento
// GET     /banners-produtos                    -> Listar relacionamentos
// GET     /banners-produtos/:banner/:produto   -> Buscar relacionamento
// DELETE  /banners-produtos/:banner/:produto   -> Excluir relacionamento
//
// =====================================================


const express = require("express");

const router = express.Router();


// Importando Controller
const BannerHasProdutoController = require("../controller/banner_has_produto_controller.js");


// =========================
// CADASTRAR RELACIONAMENTO
// =========================

router.post(
    "/",
    BannerHasProdutoController.cadastrar
);


// =========================
// LISTAR RELACIONAMENTOS
// =========================

router.get(
    "/",
    BannerHasProdutoController.listar
);


// =========================
// BUSCAR RELACIONAMENTO
// =========================

router.get(
    "/:bannerId/:produtoId",
    BannerHasProdutoController.buscar
);


// =========================
// EXCLUIR RELACIONAMENTO
// =========================

router.delete(
    "/:bannerId/:produtoId",
    BannerHasProdutoController.excluir
);


// Exportando rotas
module.exports = router;
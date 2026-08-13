const express = require("express");

const router = express.Router();

const BannerHasProdutoController = require(
    "../controller/banner_has_produto_controller.js"
);

// CADASTRAR
router.post(
    "/",
    BannerHasProdutoController.cadastrar
);

// LISTAR
router.get(
    "/",
    BannerHasProdutoController.listar
);

// BUSCAR PRODUTOS DO BANNER
router.get(
    "/banner/:bannerId",
    BannerHasProdutoController.buscarPorBanner
);

// BUSCAR BANNERS DO PRODUTO
router.get(
    "/produto/:produtoId",
    BannerHasProdutoController.buscarPorProduto
);

// BUSCAR RELACIONAMENTO
router.get(
    "/:bannerId/:produtoId",
    BannerHasProdutoController.buscar
);

// EXCLUIR
router.delete(
    "/:bannerId/:produtoId",
    BannerHasProdutoController.excluir
);

module.exports = router;

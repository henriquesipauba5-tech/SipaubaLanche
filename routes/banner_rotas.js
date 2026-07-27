// =====================================================
// ROTAS DE BANNER
// =====================================================
//
// POST    /banners       -> Cadastrar banner
// GET     /banners       -> Listar banners
// GET     /banners/:id   -> Buscar banner por ID
// PUT     /banners/:id   -> Atualizar banner
// DELETE  /banners/:id   -> Excluir banner
//
// =====================================================


const express = require("express");

// Criando o roteador do Express
const router = express.Router();


// Importando Controller de Banner
const BannerController = require("../controller//banner-controller");


// =========================
// CADASTRAR BANNER
// =========================

router.post(
    "/",
    BannerController.cadastrar
);


// =========================
// LISTAR BANNERS
// =========================

router.get(
    "/",
    BannerController.listar
);


// =========================
// BUSCAR BANNER POR ID
// =========================

router.get(
    "/:id",
    BannerController.buscarPorId
);


// =========================
// ATUALIZAR BANNER
// =========================

router.put(
    "/:id",
    BannerController.atualizar
);


// =========================
// EXCLUIR BANNER
// =========================

router.delete(
    "/:id",
    BannerController.excluir
);


// Exportando as rotas
module.exports = router;
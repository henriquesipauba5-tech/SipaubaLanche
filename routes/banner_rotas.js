const express = require("express");
const multer = require("multer");

const router = express.Router();

const BannerController = require("../controller/banner_controller.js");

const storage = multer.memoryStorage();

const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

// CADASTRAR
router.post(
    "/",
    upload.single("imagem"),
    BannerController.cadastrar
);

// LISTAR
router.get(
    "/",
    BannerController.listar
);

// BUSCAR POR ID
router.get(
    "/:id",
    BannerController.buscarPorId
);

// ATUALIZAR
router.put(
    "/:id",
    upload.single("imagem"),
    BannerController.atualizar
);

// EXCLUIR
router.delete(
    "/:id",
    BannerController.excluir
);

module.exports = router;

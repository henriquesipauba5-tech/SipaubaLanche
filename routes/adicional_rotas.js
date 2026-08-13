const express = require("express");
const multer = require("multer");

const router = express.Router();

const AdicionalController = require("../controller/adicional_controller.js");

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
    AdicionalController.cadastrar
);

// LISTAR
router.get(
    "/",
    AdicionalController.listar
);

// BUSCAR POR NOME
router.get(
    "/nome/:nome",
    AdicionalController.buscarPorNome
);

// BUSCAR POR ID
router.get(
    "/:id",
    AdicionalController.buscarPorId
);

// ATUALIZAR
router.put(
    "/:id",
    upload.single("imagem"),
    AdicionalController.atualizar
);

// EXCLUIR
router.delete(
    "/:id",
    AdicionalController.excluir
);

module.exports = router;

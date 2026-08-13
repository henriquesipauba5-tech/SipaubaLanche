const express = require("express");

const router = express.Router();

const CupomController = require("../controller/cupom_controller.js");

// CADASTRAR
router.post(
    "/",
    CupomController.cadastrar
);

// LISTAR
router.get(
    "/",
    CupomController.listar
);

// BUSCAR POR CÓDIGO
router.get(
    "/codigo/:codigo",
    CupomController.buscarPorCodigo
);

// BUSCAR POR ID
router.get(
    "/:id",
    CupomController.buscarPorId
);

// ATUALIZAR
router.put(
    "/:id",
    CupomController.atualizar
);

// EXCLUIR
router.delete(
    "/:id",
    CupomController.excluir
);

module.exports = router;

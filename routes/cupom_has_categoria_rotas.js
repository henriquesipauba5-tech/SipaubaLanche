const express = require("express");

const router = express.Router();

const CupomHasCategoriaController = require(
    "../controller/cupom_has_categoria_controller.js"
);

// CADASTRAR
router.post(
    "/",
    CupomHasCategoriaController.cadastrar
);

// LISTAR
router.get(
    "/",
    CupomHasCategoriaController.listar
);

// BUSCAR CATEGORIAS DO CUPOM
router.get(
    "/cupom/:cupomId",
    CupomHasCategoriaController.buscarPorCupom
);

// BUSCAR CUPONS DA CATEGORIA
router.get(
    "/categoria/:categoriaId",
    CupomHasCategoriaController.buscarPorCategoria
);

// BUSCAR RELACIONAMENTO
router.get(
    "/:cupomId/:categoriaId",
    CupomHasCategoriaController.buscar
);

// EXCLUIR
router.delete(
    "/:cupomId/:categoriaId",
    CupomHasCategoriaController.excluir
);

module.exports = router;

const express = require("express");

const router = express.Router();

const CategoriaController = require("../controller/categoria_controller.js");

// CADASTRAR
router.post(
    "/",
    CategoriaController.cadastrar
);

// LISTAR
router.get(
    "/",
    CategoriaController.listar
);

// BUSCAR POR NOME
router.get(
    "/nome/:nome",
    CategoriaController.buscarPorNome
);

// BUSCAR POR ID
router.get(
    "/:id",
    CategoriaController.buscarPorId
);

// ATUALIZAR
router.put(
    "/:id",
    CategoriaController.atualizar
);

// EXCLUIR
router.delete(
    "/:id",
    CategoriaController.excluir
);

module.exports = router;

const express = require("express");

const router = express.Router();

const EnderecoController = require("../controller/endereco_controller.js");

// CADASTRAR
router.post(
    "/",
    EnderecoController.cadastrar
);

// LISTAR
router.get(
    "/",
    EnderecoController.listar
);

// BUSCAR POR CEP
router.get(
    "/cep/:cep",
    EnderecoController.buscarPorCep
);

// BUSCAR POR ID
router.get(
    "/:id",
    EnderecoController.buscarPorId
);

// ATUALIZAR
router.put(
    "/:id",
    EnderecoController.atualizar
);

// EXCLUIR
router.delete(
    "/:id",
    EnderecoController.excluir
);

module.exports = router;

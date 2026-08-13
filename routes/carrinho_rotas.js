const express = require("express");

const router = express.Router();

const CarrinhoController = require("../controller/carrinho_controller.js");

// CADASTRAR
router.post(
    "/",
    CarrinhoController.cadastrar
);

// LISTAR
router.get(
    "/",
    CarrinhoController.listar
);

// BUSCAR POR CLIENTE
router.get(
    "/cliente/:clienteId",
    CarrinhoController.buscarPorCliente
);

// BUSCAR POR ID
router.get(
    "/:id",
    CarrinhoController.buscarPorId
);

// ATUALIZAR
router.put(
    "/:id",
    CarrinhoController.atualizar
);

// EXCLUIR
router.delete(
    "/:id",
    CarrinhoController.excluir
);

module.exports = router;

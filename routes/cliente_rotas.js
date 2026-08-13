const express = require("express");

const router = express.Router();

const ClienteController = require("../controller/usuario_controller.js");

// LOGIN
// IMPORTANTE: esta rota precisa vir antes de "/:id"
router.post(
    "/login",
    ClienteController.login
);

// CADASTRAR
router.post(
    "/",
    ClienteController.cadastrar
);

// LISTAR
router.get(
    "/",
    ClienteController.listar
);

// BUSCAR POR ID
router.get(
    "/:id",
    ClienteController.buscarPorId
);

// ATUALIZAR
router.put(
    "/:id",
    ClienteController.atualizar
);

// EXCLUIR
router.delete(
    "/:id",
    ClienteController.excluir
);

module.exports = router;

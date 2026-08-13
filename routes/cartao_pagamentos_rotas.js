const express = require("express");

const router = express.Router();

const Controller = require("../controller/cartao_pagamento_controller.js");

// Estas rotas permanecem disponíveis apenas para retornar HTTP 501,
// pois o recurso correspondente não existe no banco atual.

router.post("/", Controller.cadastrar);
router.get("/", Controller.listar);
router.get("/:id", Controller.buscarPorId);
router.put("/:id", Controller.atualizar);
router.delete("/:id", Controller.excluir);

module.exports = router;

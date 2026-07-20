// =====================================================
// ROTAS DE PEDIDOS
// =====================================================
//
// POST    /pedidos       -> Cadastrar pedido
// GET     /pedidos       -> Listar pedidos
// GET     /pedidos/:id   -> Buscar pedido por ID
// PUT     /pedidos/:id   -> Atualizar pedido
// DELETE  /pedidos/:id   -> Excluir pedido
//
// =====================================================


const express = require("express");

// Criando o roteador do Express
const router = express.Router();


// Importando Controller de Pedidos
const PedidosController = require("../controller/pedidos_controller.js");


// =========================
// CADASTRAR PEDIDO
// =========================

router.post(
    "/",
    PedidosController.cadastrar
);


// =========================
// LISTAR PEDIDOS
// =========================

router.get(
    "/",
    PedidosController.listar
);


// =========================
// BUSCAR PEDIDO POR ID
// =========================

router.get(
    "/:id",
    PedidosController.buscarPorId
);


// =========================
// ATUALIZAR PEDIDO
// =========================

router.put(
    "/:id",
    PedidosController.atualizar
);


// =========================
// EXCLUIR PEDIDO
// =========================

router.delete(
    "/:id",
    PedidosController.excluir
);


// Exportando as rotas
module.exports = router;
// =====================================================
// ROTAS DE PEDIDOS HAS PRODUTO
// =====================================================
//
// POST    /pedidos-produtos                    -> Cadastrar relacionamento
// GET     /pedidos-produtos                    -> Listar relacionamentos
// GET     /pedidos-produtos/:pedido/:produto   -> Buscar relacionamento
// DELETE  /pedidos-produtos/:pedido/:produto   -> Excluir relacionamento
//
// =====================================================


const express = require("express");

const router = express.Router();


// Importando Controller
const PedidosHasProdutoController = require("../controller/pedidos_has_produtos");


// =========================
// CADASTRAR RELACIONAMENTO
// =========================

router.post(
    "/",
    PedidosHasProdutoController.cadastrar
);


// =========================
// LISTAR RELACIONAMENTOS
// =========================

router.get(
    "/",
    PedidosHasProdutoController.listar
);


// =========================
// BUSCAR RELACIONAMENTO
// =========================

router.get(
    "/:pedido/:produto",
    PedidosHasProdutoController.buscar
);

    
// =========================
// EXCLUIR RELACIONAMENTO
// =========================

router.delete(
    "/:pedido/:produto",
    PedidosHasProdutoController.excluir
);


// Exportando rotas
module.exports = router;
// =====================================================
// ROTAS DE CLIENTE
// =====================================================
//
// POST    /clientes       -> Cadastrar cliente
// GET     /clientes       -> Listar clientes
// GET     /clientes/:id   -> Buscar cliente por ID
// PUT     /clientes/:id   -> Atualizar cliente
// DELETE  /clientes/:id   -> Excluir cliente
//
// =====================================================


const express = require("express");

// Criando o roteador do Express
const router = express.Router();


// Importando Controller de Cliente
const ClienteController = require("../controller/usuario_controller");


// =========================
// CADASTRAR CLIENTE
// =========================

router.post(
    "/",
    ClienteController.cadastrar
);


// =========================
// LISTAR CLIENTES
// =========================

router.get(
    "/",
    ClienteController.listar
);


// =========================
// BUSCAR CLIENTE POR ID
// =========================

router.get(
    "/:id",
    ClienteController.buscarPorId
);


// =========================
// ATUALIZAR CLIENTE
// =========================

router.put(
    "/:id",
    ClienteController.atualizar
);


// =========================
// EXCLUIR CLIENTE
// =========================

router.delete(
    "/:id",
    ClienteController.excluir
);


// Exportando as rotas
module.exports = router;
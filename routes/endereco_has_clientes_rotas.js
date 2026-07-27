// =====================================================
// ROTAS DE ENDEREÇO HAS CLIENTE
// =====================================================
//
// POST    /enderecos-clientes                 -> Cadastrar relacionamento
// GET     /enderecos-clientes                 -> Listar relacionamentos
// GET     /enderecos-clientes/:endereco/:cliente -> Buscar relacionamento
// DELETE  /enderecos-clientes/:endereco/:cliente -> Excluir relacionamento
//
// =====================================================


const express = require("express");

const router = express.Router();


// Importando Controller
const EnderecoHasClienteController = require("../controller/endereco_has_cliente_controller.js");


// =========================
// CADASTRAR RELACIONAMENTO
// =========================

router.post(
    "/",
    EnderecoHasClienteController.cadastrar
);


// =========================
// LISTAR RELACIONAMENTOS
// =========================

router.get(
    "/",
    EnderecoHasClienteController.listar
);


// =========================
// BUSCAR RELACIONAMENTO
// =========================

router.get(
    "/:enderecoId/:clienteId",
    EnderecoHasClienteController.buscar
);


// =========================
// EXCLUIR RELACIONAMENTO
// =========================

router.delete(
    "/:endereco/:cliente",
    EnderecoHasClienteController.excluir
);


// Exportando rotas
module.exports = router;
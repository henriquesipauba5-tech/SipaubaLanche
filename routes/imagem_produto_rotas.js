// =====================================================
// ROTAS DE IMAGEM DO PRODUTO
// =====================================================
//
// POST    /imagens-produto       -> Cadastrar imagem do produto
// GET     /imagens-produto       -> Listar imagens dos produtos
// GET     /imagens-produto/:id   -> Buscar imagem por ID
// PUT     /imagens-produto/:id   -> Atualizar imagem
// DELETE  /imagens-produto/:id   -> Excluir imagem
//
// =====================================================


const express = require("express");

// Criando o roteador do Express
const router = express.Router();


// Importando Controller de Imagem Produto
const ImagemProdutoController = require("../controller//imagem_produto_controller");


// =========================
// CADASTRAR IMAGEM PRODUTO
// =========================

router.post(
    "/",
    ImagemProdutoController.cadastrar
);


// =========================
// LISTAR IMAGENS PRODUTO
// =========================

router.get(
    "/",
    ImagemProdutoController.listar
);


// =========================
// BUSCAR IMAGEM POR ID
// =========================

router.get(
    "/:id",
    ImagemProdutoController.buscarPorId
);


// =========================
// ATUALIZAR IMAGEM
// =========================

router.put(
    "/:id",
    ImagemProdutoController.atualizar
);


// =========================
// EXCLUIR IMAGEM
// =========================

router.delete(
    "/:id",
    ImagemProdutoController.excluir
);


// Exportando as rotas
module.exports = router;
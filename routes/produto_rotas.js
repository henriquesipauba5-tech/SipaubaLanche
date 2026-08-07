//==================================================
//      produto_rotas.js
//      Sipaúba Lanches
//==================================================


const express =
    require("express");


const router =
    express.Router();


//==================================================
//              CONTROLLER
//==================================================

const ProdutoController =
    require(
        "../controller/produto_controller.js"
    );


//==================================================
//              MULTER
//==================================================

const upload =
    require(
        "../multer/upload.js"
    );


//==================================================
//              CADASTRAR PRODUTO
//==================================================

router.post(

    "/",

    upload.array(
        "imagens",
        10
    ),

    ProdutoController.cadastrar

);


//==================================================
//              LISTAR PRODUTOS
//==================================================

router.get(

    "/",

    ProdutoController.listar

);


//==================================================
//              BUSCAR POR ID
//==================================================

router.get(

    "/:id",

    ProdutoController.buscarPorId

);


//==================================================
//              BUSCAR POR CÓDIGO
//==================================================

router.get(

    "/codigo/:codigo",

    ProdutoController.buscarPorCodigo

);


//==================================================
//              ATUALIZAR PRODUTO
//==================================================

router.put(

    "/:id",

    ProdutoController.atualizar

);


//==================================================
//              EXCLUIR PRODUTO
//==================================================

router.delete(

    "/:id",

    ProdutoController.excluir

);


//==================================================
//              EXPORTAR
//==================================================

module.exports = router;
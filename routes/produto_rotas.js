const express =
    require("express");


const multer =
    require("multer");


const router =
    express.Router();


const ProdutoController =
    require(
        "../controller/produto_controller.js"
    );


//==================================================
//              MULTER
//==================================================

const storage =
    multer.memoryStorage();


const upload =
    multer({

        storage:

            storage,

        limits: {

            fileSize:
                5 * 1024 * 1024

        }

    });


//==================================================
//              CADASTRAR
//==================================================

router.post(

    "/",

    upload.single("imagem"),

    ProdutoController.cadastrar

);


//==================================================
//              LISTAR
//==================================================

router.get(

    "/",

    ProdutoController.listar

);


//==================================================
//          BUSCAR POR CATEGORIA
//==================================================

router.get(

    "/categoria/:categoriaId",

    ProdutoController.buscarPorCategoria

);


//==================================================
//              BUSCAR POR ID
//==================================================

router.get(

    "/:id",

    ProdutoController.buscarPorId

);


//==================================================
//              ATUALIZAR
//==================================================

router.put(

    "/:id",

    upload.single("imagem"),

    ProdutoController.atualizar

);


//==================================================
//              EXCLUIR
//==================================================

router.delete(

    "/:id",

    ProdutoController.excluir

);


module.exports =
    router;
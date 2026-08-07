//==================================================
//      adicional_rotas.js
//      Sipaúba Lanches
//==================================================


//==================================================
//                  IMPORTAÇÕES
//==================================================

const express = require("express");

const multer = require("multer");

const AdicionalController = require(
    "../controller/adicional_controller.js"
);


//==================================================
//                  ROTEADOR
//==================================================

const router = express.Router();


//==================================================
//                  MULTER
//==================================================

const storage = multer.memoryStorage();


const upload = multer({

    storage: storage,

    limits: {

        // Máximo de 5 MB
        fileSize: 5 * 1024 * 1024

    }

});


//==================================================
//              CADASTRAR ADICIONAL
//==================================================

router.post(

    "/",

    upload.single("imagem"),

    AdicionalController.cadastrar

);


//==================================================
//              LISTAR ADICIONAIS
//==================================================

router.get(

    "/",

    AdicionalController.listar

);


//==================================================
//          BUSCAR ADICIONAL POR ID
//==================================================

router.get(

    "/:id",

    AdicionalController.buscarPorId

);


//==================================================
//          ATUALIZAR ADICIONAL
//==================================================

router.put(

    "/:id",

    upload.single("imagem"),

    AdicionalController.atualizar

);


//==================================================
//              EXCLUIR ADICIONAL
//==================================================

router.delete(

    "/:id",

    AdicionalController.excluir

);


//==================================================
//                  EXPORTAR
//==================================================

module.exports = router;
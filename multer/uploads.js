//==================================================
//              upload.js
//              Sipaúba Lanches
//==================================================

const multer = require("multer");
const path = require("path");
const fs = require("fs");


//==================================================
//              PASTA DE UPLOAD
//==================================================

const pastaUploads = path.join(
    __dirname,
    "../assets/uploads"
);


//==================================================
//              CRIAR PASTA
//==================================================

if (!fs.existsSync(pastaUploads)) {

    fs.mkdirSync(
        pastaUploads,
        {
            recursive: true
        }
    );

}


//==================================================
//              CONFIGURAÇÃO DO MULTER
//==================================================

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(
            null,
            pastaUploads
        );

    },


    filename: function (req, file, cb) {

        const extensao =
            path.extname(file.originalname);

        const nomeArquivo =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1E9) +
            extensao;

        cb(
            null,
            nomeArquivo
        );

    }

});


//==================================================
//              FILTRO DE IMAGEM
//==================================================

const fileFilter = function (
    req,
    file,
    cb
) {

    const tiposPermitidos = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp"
    ];


    if (
        tiposPermitidos.includes(
            file.mimetype
        )
    ) {

        cb(
            null,
            true
        );

    } else {

        cb(
            new Error(
                "Apenas imagens JPG, JPEG, PNG ou WEBP são permitidas."
            ),
            false
        );

    }

};


//==================================================
//              CONFIGURAÇÃO FINAL
//==================================================

const upload = multer({

    storage: storage,

    fileFilter: fileFilter,

    limits: {

        fileSize:
            5 * 1024 * 1024

    }

});


//==================================================
//              EXPORTAR
//==================================================

module.exports = upload;
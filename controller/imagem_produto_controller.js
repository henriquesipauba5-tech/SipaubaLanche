// ============================================================
// CONTROLLER INDISPONÍVEL COM O BANCO ATUAL
// ============================================================
// Recurso: Imagem do Produto
// Motivo: A tabela Imagem_Produto não existe no banco enviado.
// O banco SipaubaLanche não será alterado.
// ============================================================

function indisponivel(req, res) {
    return res.status(501).json({
        erro: "Recurso não disponível no banco de dados atual.",
        recurso: "Imagem do Produto"
    });
}

module.exports = {
    cadastrar: indisponivel,
    listar: indisponivel,
    buscarPorId: indisponivel,
    buscarPorNome: indisponivel,
    buscarPorCodigo: indisponivel,
    buscarPorCliente: indisponivel,
    buscarPorProduto: indisponivel,
    buscar: indisponivel,
    atualizar: indisponivel,
    excluir: indisponivel
};

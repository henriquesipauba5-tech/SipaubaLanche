// ============================================================
// CONTROLLER INDISPONÍVEL COM O BANCO ATUAL
// ============================================================
// Recurso: Categoria e Promoção
// Motivo: As tabelas Promocao e Categoria_has_Promocao não existem no banco enviado.
// O banco SipaubaLanche não será alterado.
// ============================================================

function indisponivel(req, res) {
    return res.status(501).json({
        erro: "Recurso não disponível no banco de dados atual.",
        recurso: "Categoria e Promoção"
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

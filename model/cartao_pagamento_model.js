// ============================================================
// MODEL NÃO UTILIZÁVEL COM O BANCO ATUAL
// ============================================================
//
// Este arquivo existia no projeto do aluno, porém o banco
// SipaubaLanche enviado como referência NÃO possui a tabela:
// Cartao_Pagamento
//
// Como o banco não deve ser alterado, este model não pode
// executar INSERT, SELECT, UPDATE ou DELETE nessa tabela.
//
// Mantenha este arquivo fora das rotas do servidor enquanto
// a estrutura oficial do banco continuar sem essa tabela.
// ============================================================

function tabelaNaoExiste(callback) {
    const erro = new Error(
        "Este recurso não existe no banco de dados SipaubaLanche atual."
    );

    if (typeof callback === "function") {
        return callback(erro);
    }

    throw erro;
}

module.exports = {
    cadastrar: tabelaNaoExiste,
    listar: tabelaNaoExiste,
    buscarPorId: tabelaNaoExiste,
    buscar: tabelaNaoExiste,
    atualizar: tabelaNaoExiste,
    excluir: tabelaNaoExiste
};

class ProdutosPage{

    buscarProdutoNaListaPeloNome(nomeProduto){
        cy.get('.products > .row').contains(nomeProduto).click()
    }

    adicionarProdutoNoCarrinho(){

    }
}

export default new ProdutosPage()
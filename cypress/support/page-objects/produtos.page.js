class ProdutosPage{

    buscarProdutoNaListaPeloNome(nomeProduto){
        cy.get('.products > .row').contains(nomeProduto).click()
    }

    adicionarProdutoNoCarrinho(tamanho, cor, quantidade){
        cy.get('.button-variable-item-XS').click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }
}

export default new ProdutosPage()
/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

const produtos = require('../../fixtures/produtos.json')

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });
    
    it('Deve selecionar o primeiro produto da lista', () => {
        cy.get('.block-inner').first().click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve selecionar um produto na lista de acordo com a posicao desejada', () => {
        cy.get('.block-inner').eq(2).click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve selecionar um produto na lista de acordo com a informacao desejada', () => {
        cy.get('.products > .row').contains('Abominable Hoodie').click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve selecionar o ultimo produto da lista', () => {
        cy.get('.block-inner').last().click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });


    // Utilizando page objects

    it('Deve buscar um produto pelo nome com sucesso', () => {
        produtosPage.buscarProdutoNaListaPeloNome('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve adicionar um produto ao carrinho', () => {
        produtosPage.buscarProdutoNaListaPeloNome('Abominable Hoodie')
        produtosPage.adicionarProdutoNoCarrinho('M', 'Blue', 2)
        cy.get('.woocommerce-message').should('contain', '“Abominable Hoodie” foi adicionado no seu carrinho.')
    });

    it.only('Deve adicionar um produto ao carrinho - Utilizando massa de dados', () => {
        produtosPage.buscarProdutoNaListaPeloNome(produtos[0].nomeProduto)
        produtosPage.adicionarProdutoNoCarrinho(produtos[0].tamanhoProduto, produtos[0].cor, produtos[0].quantidade)
    });
});
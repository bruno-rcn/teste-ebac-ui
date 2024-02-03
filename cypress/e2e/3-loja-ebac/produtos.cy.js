/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
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
});
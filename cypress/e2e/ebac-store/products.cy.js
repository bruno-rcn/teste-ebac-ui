/// <reference types="cypress"/> // Reference to use of cypress in this file

import productsPage from '../../support/page-objects/products.page';

describe('Feature: Products', () => {

    beforeEach(() => {
        productsPage.visitUrl()
    })

    afterEach(() => {
        cy.screenshot()
    });

    it('Select first product', () => {
        cy.get('.product-block').first().click()
        cy.get('.single_add_to_cart_button').should('exist')
    });

    it('Search product on list with page object', () => {
        productsPage.searchProductOnList('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether')
    });

    it('Search product with page object', () => {
        productsPage.searchProduct('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Gym')
    });

    it('Select last product', () => {
        cy.get('.product-block').last().click()
        cy.get('.single_add_to_cart_button').should('exist')
    });

    it('Select any product by position', () => {
        cy.get('.product-block').eq(2).click()
        cy.get('.single_add_to_cart_button').should('exist')
    });

    it('Select any product by name', () => {
        cy.get('.product-block').contains('Apollo Running Short').click()
        cy.get('.single_add_to_cart_button').should('exist')
    });
});
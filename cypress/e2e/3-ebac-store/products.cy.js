/// <reference types="cypress"/> // Reference to use of cypress in this file

import { faker } from '@faker-js/faker';

describe('Feature: Products', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })

    afterEach(() => {
        cy.screenshot()
    });

    it('Select first product', () => {
        cy.get('.product-block').first().click()
        cy.get('.single_add_to_cart_button').should('exist')
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
class ProductsPage {

    visitUrl(){
        cy.visit('produtos/')
    }

    searchProduct(productName){
        cy.get('[name="s"]').eq(1).type(productName)
        cy.get('.button-search').eq(1).click()
    }

    searchProductOnList(productName){
        cy.get('.product-block').contains(productName).click()
    }

}

export default new ProductsPage()
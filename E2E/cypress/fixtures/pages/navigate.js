class Navigate{
    goToOnlineStore = (element) => {
        cy.fixture('navigate.json').then((locator) => {
            cy.visit(locator.urlLoginPage);
        })
    }
}

export default new Navigate();
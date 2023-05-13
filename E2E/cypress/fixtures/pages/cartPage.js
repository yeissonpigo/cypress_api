export default class CartPage {

    locators;

    constructor(locators) {
        this.locators = locators;
    }

    goToCheckout = (element) => {
        cy.get(this.locators.checkoutButton).click();
    }
}
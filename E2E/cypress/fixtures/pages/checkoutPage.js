export default class CheckoutPage {

    locators;
    dataTest;

    constructor(locators, dataTest){
        this.locators = locators;
        this.dataTest = dataTest;
    }

    typeFirstName = (element) => {
        cy.get(this.locators.firstNameInput).type(this.dataTest.firstName);
    }

    typeLastName = (element) => {
        cy.get(this.locators.lastNameInput).type(this.dataTest.lastName);
    }

    typePostalCode = (element) => {
        cy.get(this.locators.postalCodeInput).type(this.dataTest.postalCode);
    }

    clickOnContinue = (element) => {
        cy.get(this.locators.continueButton).click();
    }
}
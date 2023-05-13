export default class ConfirmationPage {

    locators;
    dataTest;

    constructor(locators, dataTest){
        this.locators = locators;
        this.dataTest = dataTest;
    }

    confirmationMessageShouldBeVisible = (element) => {
        cy.get(this.locators.confirmationMessage).contains(this.dataTest.confirmationMessageText).should('be.visible');
    }
}
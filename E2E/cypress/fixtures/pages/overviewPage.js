export default class OverviewPage {

    locators;

    constructor(locators){
        this.locators = locators;
    }

    clickOnFinish = (element) => {
        cy.get(this.locators.finishButton).click();
    }
}
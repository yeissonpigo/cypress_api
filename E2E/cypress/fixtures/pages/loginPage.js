export default class LoginPage {

    testdata;
    locators;

    constructor(data, locators){
        this.testdata = data;
        this.locators = locators;
    }

    typeUsername = (element) => {
        cy.get(this.locators.usernameInput).type(this.testdata.username);
    }

    typePassword = (element) => {
        cy.get(this.locators.passwordInput).type(this.testdata.password);
    }

    clickLoginButton = (element) => {
        cy.get(this.locators.loginButton).click();
    }
}

import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import navigate from "../../../fixtures/pages/navigate";
import loginPage from "../../../fixtures/pages/loginPage";
import inventoryPage from "../../../fixtures/pages/inventoryPage";
import cartPage from "../../../fixtures/pages/cartPage";
import checkoutPage from "../../../fixtures/pages/checkoutPage";
import overviewPage from "../../../fixtures/pages/overviewPage";
import confirmationPage from "../../../fixtures/pages/confirmationPage";

Given("User goes to the store", () => {
  loginPageObject = "";
  inventoryPageObject = "";
  cartPageObject = "";
  checkoutPageObject = "";
  overviewPageObject = "";
  confirmationPageObject = "";
  dataLogin = cy.fixture('locators/locatorsLogin.json').then((locators) => {
    cy.fixture('test.data/credentials.json').then((data) => {
      loginPageObject = new loginPage(data, locators);
    }) 
  })

  dataInventory = cy.fixture('locators/locatorsInventory.json').then((locators) => {
    cy.fixture('test.data/itemsTestData.json').then((data) => {
      inventoryPageObject = new inventoryPage(locators, data);
    }) 
  })

  dataCart = cy.fixture('locators/locatorsCart.json').then((locators) => {
    cartPageObject = new cartPage(locators);
  })

  dataCheckout = cy.fixture('locators/locatorsCheckout.json').then((locators) => {
    cy.fixture('test.data/checkoutTestData.json').then((data) => {
      checkoutPageObject = new checkoutPage(locators, data);
    })
  })

  dataOverview = cy.fixture('locators/locatorsOverview.json').then((locators) => {
    overviewPageObject = new overviewPage(locators);
  })

  dataConfirmation = cy.fixture('locators/locatorsConfirmation.json').then((locators) => {
    cy.fixture('test.data/confirmationTestData.json').then((data) => {
      confirmationPageObject = new confirmationPage(locators, data);
    })
  })

  navigate.goToOnlineStore();
});

When("User logs in", () => {
  loginPageObject.typeUsername();
  loginPageObject.typePassword();
  loginPageObject.clickLoginButton();
});

When("User selects certain items", () => {
  inventoryPageObject.selectItems();
})

When("User goes to check the cart", () => {
  inventoryPageObject.goToCart();
})

When("User goes to checkout", () => {
  cartPageObject.goToCheckout();
})

When("User inserts delivery info", () => {
  checkoutPageObject.typeFirstName();
  checkoutPageObject.typeLastName();
  checkoutPageObject.typePostalCode();
  checkoutPageObject.clickOnContinue();
})

When("User confirms purchase", () => {
  overviewPageObject.clickOnFinish();
})

Then("User can see confirmation message", () => {
  confirmationPageObject.confirmationMessageShouldBeVisible();
})
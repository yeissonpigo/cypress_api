require('@cypress/xpath');
export default class InventoryPage{

    xAddToCart;
    itemTestData;

    constructor(locators, testData) {
        this.locators = locators;
        this.itemTestData = testData;
    }

    xAddToCartFun(item) {
        this.xAddToCart = '//div[contains(text(), ' + item + ')]/ancestor::div[contains(@class, "inventory_item")]//button[contains(@class, "btn btn_primary")]';
        return this.xAddToCart;
    }

    selectItems = (element) => {
        for(let item in this.itemTestData) {
            cy.xpath('//div[contains(text(), "' + this.itemTestData[item] + '")]/ancestor::div[contains(@class, "inventory_item")]//button[contains(@class, "btn btn_primary")]').click();
        }
    }

    goToCart = (element) => {
        cy.get(this.locators.cartButton).click();
    }
}
class CartPage {

  proceedToCheckoutBtn() {
    return cy.contains("Proceed To Checkout")
  }

  verifyProductVisible() {

    this.proceedToCheckoutBtn()
      .should("be.visible")

  }

}

export default new CartPage()
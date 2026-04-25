class HomePage {

  productsBtn() {
    return cy.contains("Products")
  }

  cartBtn() {
    return cy.contains("Cart")
  }

  goToProducts() {
    this.productsBtn().click()
  }

  goToCart() {
    this.cartBtn().click()
  }

}

export default new HomePage()
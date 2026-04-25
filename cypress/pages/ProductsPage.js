class ProductsPage {

  firstProductCard() {
    return cy.get(".product-image-wrapper").first()
  }

  addToCartBtn() {
    return cy.contains("Add to cart")
  }

  viewCartBtn() {
    return cy.contains("View Cart")
  }

  searchInput() {
    return cy.get("#search_product")
  }

  searchBtn() {
    return cy.get("#submit_search")
  }

  addFirstProductToCart() {

    this.firstProductCard()
      .trigger("mouseover")

    cy.contains("Add to cart")
      .first()
      .click()

  }

  viewCart() {

    this.viewCartBtn()
      .click()

  }

  searchProduct(productName) {

    this.searchInput()
      .type(productName)

    this.searchBtn()
      .click()

  }

}

export default new ProductsPage()
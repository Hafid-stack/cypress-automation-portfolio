import HomePage from "../../pages/HomePage"
import ProductsPage from "../../pages/ProductsPage"

describe("Search Product Feature", () => {

  beforeEach(() => {

    cy.visit("/")

  })

  it("User searches for a product successfully", () => {

    HomePage.goToProducts()

    ProductsPage.searchProduct("Blue Top")

    cy.contains("Blue Top")
      .should("be.visible")

  })

})
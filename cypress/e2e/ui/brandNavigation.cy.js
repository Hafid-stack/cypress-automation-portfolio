describe("Brand Navigation Feature", () => {

  beforeEach(() => {

    cy.visit("/products")

  })

  it("User navigates to Polo brand products", () => {

    cy.contains("Polo")
      .click()

    cy.url()
      .should("include", "brand_products")

    cy.contains("Brand - Polo Products")
      .should("be.visible")

  })

})
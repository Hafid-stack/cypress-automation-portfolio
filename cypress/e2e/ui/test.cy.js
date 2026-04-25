describe("Basic Test", () => {

  it("Open website", () => {

    cy.visit("/")

    cy.contains("Automation")

  })

})
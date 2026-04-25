import CartFlow from "../../flows/cartFlow"

describe("Multiple Products Cart", () => {

  beforeEach(() => {

    cy.visit("/")

  })

  it("User adds multiple products to cart", () => {

    CartFlow.addMultipleProductsToCart()

  })

})
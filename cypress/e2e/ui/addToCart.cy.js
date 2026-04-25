import CartFlow from "../../flows/cartFlow"

describe("Add Product To Cart", () => {

  beforeEach(() => {

    cy.visit("/")

  })

  it("User adds product to cart successfully", () => {

    CartFlow.addProductToCart()

  })

})
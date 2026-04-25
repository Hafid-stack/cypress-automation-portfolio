import LoginFlow from "../../flows/loginFlow"

describe("Login Feature", () => {

  beforeEach(() => {

    cy.visit("/")

  })

  it("User logs in successfully", () => {

    cy.fixture("user").then(user => {

      LoginFlow.loginUser(
        user.email,
        user.password
      )

    })

  })

})
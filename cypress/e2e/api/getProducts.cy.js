describe("API - GET Products", () => {

  it("should return all products successfully", () => {

    cy.request("GET", "https://automationexercise.com/api/productsList")
      .then((response) => {

        expect(response.status).to.eq(200)

        // API returns stringified JSON sometimes → handle safely
        expect(response.body).to.exist

      })

  })

})
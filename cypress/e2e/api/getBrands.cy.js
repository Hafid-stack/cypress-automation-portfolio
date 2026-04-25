describe("API - GET Brands", () => {

  it("should return all brands", () => {

    cy.request("GET", "https://automationexercise.com/api/brandsList")
      .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body).to.exist

      })

  })

})
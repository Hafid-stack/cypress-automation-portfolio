describe("API - Update User", () => {

  it("should update user info", () => {

    cy.request({
      method: "PUT",
      url: "https://automationexercise.com/api/updateAccount",
      form: true,
      body: {
        name: "updatedUser"
      }
    }).then((response) => {

      expect(response.status).to.eq(200)

    })

  })

})
describe("API - Delete User", () => {

  it("should delete user", () => {

    cy.request({
      method: "DELETE",
      url: "https://automationexercise.com/api/deleteAccount",
      form: true,
      body: {
        email: "testuser123@test.com",
        password: "123456"
      }
    }).then((response) => {

      expect(response.status).to.eq(200)

    })

  })

})
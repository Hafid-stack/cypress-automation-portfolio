describe("API - Create User", () => {

  it("should create a user", () => {

    cy.request({
      method: "POST",
      url: "https://automationexercise.com/api/createAccount",
      form: true,
      body: {
        name: "testuser",
        email: "testuser123@test.com",
        password: "123456"
      }
    }).then((response) => {

      expect(response.status).to.eq(200)

    })

  })

})
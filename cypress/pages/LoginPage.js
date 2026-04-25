class LoginPage {

  loginSignupBtn() {
    return cy.contains("Signup / Login")
  }

  emailInput() {
    return cy.get('[data-qa="login-email"]')
  }

  passwordInput() {
    return cy.get('[data-qa="login-password"]')
  }

  loginBtn() {
    return cy.get('[data-qa="login-button"]')
  }

  loggedUser() {
    return cy.contains("Logged in as")
  }

  goToLogin() {
    this.loginSignupBtn().click()
  }

  login(email, password) {
    this.emailInput().type(email)
    this.passwordInput().type(password)
    this.loginBtn().click()
  }

}

export default new LoginPage()
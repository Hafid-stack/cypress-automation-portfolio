import LoginPage from "../pages/LoginPage"

class LoginFlow {

  loginUser(email, password) {

    LoginPage.goToLogin()

    LoginPage.login(
      email,
      password
    )

    LoginPage.loggedUser()
      .should("be.visible")

  }

}

export default new LoginFlow()
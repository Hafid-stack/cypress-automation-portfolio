import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"
import CartPage from "../pages/CartPage"

class CartFlow {

  addProductToCart() {

    HomePage.goToProducts()

    ProductsPage.addFirstProductToCart()

    ProductsPage.viewCart()

    CartPage.verifyProductVisible()

  }

  addMultipleProductsToCart() {

  HomePage.goToProducts()

  ProductsPage.addFirstProductToCart()

  cy.contains("Continue Shopping")
    .click()

  ProductsPage.addSecondProductToCart()

  ProductsPage.viewCart()

  CartPage.verifyProductVisible()

}
}

export default new CartFlow()
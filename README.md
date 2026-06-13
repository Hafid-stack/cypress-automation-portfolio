
# QA Automation Portfolio — Cypress (JavaScript)

A UI and API test automation framework built with Cypress, targeting an e-commerce demo application. Structured using Page Object Model (POM) and reusable flows to reflect real-world QA engineering practices.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Language | JavaScript |
| Test Framework | Cypress |
| Design Pattern | Page Object Model (POM) |
| Test Data | JSON Fixtures |
| Version Control | Git & GitHub |

---

## Project Structure

```
cypress/
├── e2e/
│   ├── api/                        # API test specs
│   │   ├── createUser.cy.js        # POST - create new user
│   │   ├── deleteUser.cy.js        # DELETE - remove user
│   │   ├── getBrands.cy.js         # GET - brands list
│   │   ├── getProducts.cy.js       # GET - products list
│   │   └── updateUser.cy.js        # PUT - update user data
│   └── ui/                         # UI end-to-end test specs
│       ├── addToCart.cy.js         # Add product to cart
│       ├── brandNavigation.cy.js   # Browse products by brand
│       ├── login.cy.js             # Login scenarios
│       ├── multipleProducts.cy.js  # Multi-product cart interactions
│       ├── searchProduct.cy.js     # Product search
│       └── test.cy.js              # Smoke / exploratory tests
├── pages/                          # Page Object classes
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   └── CartPage.js
├── flows/                          # Reusable multi-step workflows
│   ├── loginFlow.js                # Encapsulates full login sequence
│   └── cartFlow.js                 # Encapsulates add-to-cart sequence
├── fixtures/
│   ├── user.json                   # Test user data
│   └── example.json                # Sample fixture data
└── support/
    ├── commands.js                 # Custom Cypress commands
    └── e2e.js                      # Global test configuration
```

---

## Test Coverage

### UI Tests

- User login flow
- Product search by keyword
- Add single product to cart
- Add multiple products to cart
- Navigate and filter products by brand

### API Tests

- GET all products
- GET all brands
- POST create a new user
- PUT update an existing user
- DELETE a user

---

## Design Highlights

**Page Object Model (POM)** — UI interactions are encapsulated in dedicated page classes (`HomePage`, `LoginPage`, `ProductsPage`, `CartPage`). Test specs stay clean and readable, with all selectors and actions managed in one place.

**Reusable Flows** — Common multi-step sequences like logging in or adding to cart are extracted into `flows/`, so they can be shared across multiple test specs without duplication.

**JSON Fixtures** — Test data (user credentials, product info) is stored in `fixtures/` as JSON files, keeping test logic decoupled from hardcoded values.

**Custom Commands** — Frequently used Cypress actions are registered as custom commands in `support/commands.js`, reducing boilerplate across specs.

---

## How to Run

### Prerequisites
- Node.js (v16+)
- npm

### Install dependencies
```bash
npm install
```

### Open Cypress Test Runner (interactive)
```bash
npx cypress open
```

### Run all tests headlessly
```bash
npx cypress run
```

### Run only UI tests
```bash
npx cypress run --spec "cypress/e2e/ui/**/*.cy.js"
```

### Run only API tests
```bash
npx cypress run --spec "cypress/e2e/api/**/*.cy.js"
```

---

## Key Learnings

This project covers practical Cypress skills including:
- Structuring a Cypress project with POM architecture
- Writing UI tests that simulate real user journeys
- Testing REST API endpoints directly within Cypress
- Using fixtures for clean, maintainable test data
- Creating custom commands to reduce repetition
- Organizing tests into logical folders (ui vs api)

---

## Author

**Abdelhafid Idbahamd**
[LinkedIn](https://www.linkedin.com/in/your-linkedin) • [GitHub](https://github.com/Hafid-stack)

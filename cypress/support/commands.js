export const login = (waitTime = 1000) => {
    cy.visit('/')
    cy.get('[data-test="login-button"]').should('be.visible')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.wait(100)
    cy.get('.title').should('be.visible')
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
}

export function have_text_generic(component, text) {
    cy.get(component).should('have.text', text);
}

export function is_visible_generic(component) {
    cy.get(component).should('be.visible');
}

export function validate_container_page(container) {
    cy.get(container);
}

export function get_and_click_button(button) {
    cy.get(button).click();
    cy.wait(500);
}

export function get_field_and_type(field, type) {
    cy.get(field).type(type);
    cy.wait(100);
}
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('@cypress/xpath');
import { get_and_click_button, get_field_and_type, have_text_generic, is_visible_generic, login, validate_container_page } from "../../support/commands";

before(() => {
    login();
})

Given('que estou na tela de produtos', () => {
    is_visible_generic('.title');
    validate_container_page(':nth-child(2) > :nth-child(1) > #inventory_container');
})

When('clico para adicionar produto ao carrinho de compras', () => {
    const products_to_buy = [
        '[data-test="add-to-cart-sauce-labs-backpack"]',
        '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
        '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
        '[data-test="add-to-cart-sauce-labs-bike-light"]'
    ]

    products_to_buy.forEach(index => {
        get_and_click_button(index);
    })
})

When('clico para remover produto do carrinho de compras', () => {
    get_and_click_button('[data-test="remove-sauce-labs-backpack"]');
})

Then('clico para realizar checkout confirmando os dados e finalizo a compra', () => {
    is_visible_generic('.shopping_cart_link');
    get_and_click_button('.shopping_cart_link');
    get_and_click_button('[data-test="checkout"]');

    get_field_and_type('[data-test="firstName"]', 'Mayara');
    get_field_and_type('[data-test="lastName"]', 'Monteiro de Souza');
    get_field_and_type('[data-test="postalCode"]', '88140-000');

    get_and_click_button('[data-test="continue"]');

    have_text_generic('.shopping_cart_badge', '3');
    have_text_generic('#item_1_title_link > .inventory_item_name', 'Sauce Labs Bolt T-Shirt');
    have_text_generic('#item_5_title_link > .inventory_item_name', 'Sauce Labs Fleece Jacket');
    have_text_generic('#item_0_title_link > .inventory_item_name', 'Sauce Labs Bike Light');

    get_and_click_button('[data-test="finish"]');

    is_visible_generic('.complete-header');
    have_text_generic('.complete-header', 'THANK YOU FOR YOUR ORDER');
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
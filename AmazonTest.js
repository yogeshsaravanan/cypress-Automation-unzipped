/// <reference types="cypress" />

import AmazonPage from "../pageObjects/AmazonPage";

describe("Amazon cart", function () {
  const ap = new AmazonPage();
  it("Open Amazon", function () {
    ap.openAmazon();
    ap.openCart();
    cy.get("h2").should("have.text", "\nYour Amazon Basket is empty\n");
  });

  it("search", function () {
    ap.search(
      "boAt Rockers 400 Bluetooth On-Ear Headphone with Mic(Carbon Black)"
    );
    cy.wait(10000);
    ap.clickSearch();
    cy.wait(10000);
  });

  it("click third element", function () {
    ap.getlink();
  });

  it("Add to cart", function () {
    cy.wait(20000);
    ap.addToCart();
  });

  it("Validate cart count", function () {
    cy.wait(10000);
    const ap = new AmazonPage();
    ap.checkCaetCount("1");
  });

  it("Validate cart after adding an item", function () {
    ap.openCart();
  });

  it("Delete item", function () {
    ap.deleteItem();
  });

  it("Validate cart count after deleting", function () {
    cy.wait(10000);
    ap.checkCaetCount("0");
  });
});

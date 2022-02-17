/// <reference types="cypress" />

class AmazonPage {
  openAmazon() {
    cy.visit("https://www.amazon.in");
  }

  openCart() {
    cy.get("#nav-cart").click();
  }

  checkCaetCount(value) {
    const field = cy.get("#nav-cart-count").should("have.text", value);
  }

  getcartemptystring() {
    cy.get("h2");
    return this;
  }

  search(value) {
    const field = cy.get("#twotabsearchtextbox");
    field.type(value);
    return this;
  }

  clickSearch() {
    cy.get("#nav-search-submit-button").click();
  }

  getlink() {
    cy.get(
      "a.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal"
    )
      .should("have.attr", "href")
      .then((href) => {
        cy.log(href);
        let base_url = "https://amazon.in/";
        let url = base_url.concat(href);
        cy.visit(url);
      });
  }

  addToCart() {
    cy.get("#add-to-cart-button").click();
  }

  deleteItem() {
    cy.get(
      "#sc-item-Cbbd10f15-267d-4bde-b6c3-e8297cecaac8 > div.sc-list-item-content > div > div.a-column.a-span10 > div > div > div.a-fixed-left-grid-col.a-col-right > div.a-row.sc-action-links > span.a-size-small.sc-action-delete > span > input"
    ).click();
  }
}

export default AmazonPage;

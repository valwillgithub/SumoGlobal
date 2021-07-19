const expectchai = require("chai").expect;

const addRemove = require("../pageobjects/addRemovePage");

describe("Add Remove Elements Verification", () => {
	it("Add Elements Verification", () => {
		addRemove.gotoAddRemovePage();
		expectchai(addRemove.getElementCount).to.be.equal(0);
		addRemove.addElement(30);
		expectchai(addRemove.getElementCount).to.be.equal(30);
	});

	it("Add and Remove Elements Verification", () => {
		addRemove.gotoAddRemovePage();
		expectchai(addRemove.getElementCount).to.be.equal(0);
		addRemove.addElement(30);
		expectchai(addRemove.getElementCount).to.be.equal(30);
		addRemove.deleteElement(30);
		expectchai(addRemove.getElementCount).to.be.equal(0);
	});
});

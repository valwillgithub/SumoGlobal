class AddRemovePage {
	get add() {
		return $("#content > div > button");
	}

	get pageHeader() {
		return $("#content > h3");
	}

	get deleteButton() {
		return $("#elements .added-manually");
	}

	gotoAddRemovePage() {
		browser.url("/add_remove_elements/");
		browser.maximizeWindow();
		expect(this.pageHeader).toHaveTextContaining("Add/Remove Elements");
	}

	addElement(num) {
		if (num < 1) {
			throw "number must be 1 or more";
		}
		for (let i = 1; i <= num; i++) {
			this.add.click();
		}
	}

	deleteElement(num) {
		if (num < 1) {
			throw "number must be 1 or more";
		}
		for (let i = 1; i <= num; i++) {
			this.deleteButton.click();
		}
	}

	get getElementCount() {
		return $$("#elements .added-manually").length;
	}
} //class

module.exports = new AddRemovePage();

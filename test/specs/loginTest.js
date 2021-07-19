const expectchai = require("chai").expect;

const LoginPage = require("../pageobjects/loginPage");

describe("Login Verification", () => {
	it("Successful Login Verification", () => {
		LoginPage.gotoLoginPage();
		LoginPage.login("tomsmith", "SuperSecretPassword!");
		expect(LoginPage.pageHeader).toHaveTextContaining("Secure Area");
		LoginPage.logOut.click();
		expect(LoginPage.pageHeader).toHaveTextContaining("Login Page");
	});

	it("Invalid Username verification", () => {
		LoginPage.gotoLoginPage();
		LoginPage.login("tomjones", "SuperSecretPassword!");
		expect(LoginPage.errorDisplayed).toHaveTextContaining(
			"Your username is invalid"
		);
	});

	it("Invalid Password verification", () => {
		LoginPage.gotoLoginPage();
		LoginPage.login("tomsmith", "WrongPassword!");
		expect(LoginPage.errorDisplayed).toHaveTextContaining(
			"Your password is invalid"
		);
	});
});

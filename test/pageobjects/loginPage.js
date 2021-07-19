class LoginPage {
	get userName() {
		return $("#username");
	}

	get password() {
		return $("#password");
	}

	get loginButton() {
		return $("button[type='submit']");
	}

	login(username, password) {
		this.userName.setValue(username);
		this.password.setValue(password);
		this.loginButton.click();
	}
	get errorDisplayed() {
		return $("#flash");
	}

	get logOut() {
		return $("a[href*='logout']");
	}

	get pageHeader() {
		return $("#content h2");
	}

	gotoLoginPage() {
		browser.url("/login");
		browser.maximizeWindow();
		expect(this.pageHeader).toHaveTextContaining("Login Page");
	}
} // class

module.exports = new LoginPage();

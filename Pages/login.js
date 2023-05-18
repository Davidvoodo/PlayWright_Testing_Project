exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.userName_TextBox = page.locator('#user-name')
        this.password_TextBox = page.locator('#password')
        this.login_Button = page.locator('[id="login-button"]')


        this.Open_Menu = page.locator('[id="react-burger-menu-btn"]')
        this.Logout_Button = page.locator('[id="logout_sidebar_link"]')


    }

    async goToLoginPageURL() {

        await this.page.goto('https://www.saucedemo.com/');
    }


    async fullLogin(username, password) {

        await this.userName_TextBox.fill(username);
        await this.password_TextBox.fill(password);
        await this.login_Button.click();

    }

    async fullLogOut() {
        await this.Open_Menu.click();
        await this.Logout_Button.click();



    }


}
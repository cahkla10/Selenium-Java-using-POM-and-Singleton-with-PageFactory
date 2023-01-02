package pages;

import helpers.GlobalVariables;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;

import java.util.List;

public class LoginPage {
    private WebDriver webDriver;

    public LoginPage(WebDriver webDriver){
        this.webDriver = webDriver;
        PageFactory.initElements(new AjaxElementLocatorFactory(webDriver, GlobalVariables.TIMEOUT), this);
    }

    @FindBy(xpath = "//*[@class='login_logo']")
    List<WebElement> logoImg;

    @FindBy(id = "user-name")
    WebElement usernameField;

    @FindBy(id = "password")
    WebElement passwordField;

    @FindBy(id = "login-button")
    WebElement loginBtn;

    @FindBy(xpath = "//*[@class='bot_column']")
    List<WebElement> botImg;

    @FindBy(xpath = "//*[@data-test='error']")
    List<WebElement> errorMessage;

    public void seeLogoImg(){
        if(logoImg.size() >= 1){
            System.out.println("Sauce Lab Logo displayed!");
        }
    }

    public void seeBotImg(){
        if(botImg.size() >= 1){
            System.out.println("Sauce Lab Bot Image displayed!");
        }
    }

    public void clearUsernameField(){
        usernameField.clear();
    }

    public void inputUsernameField(String username){
        usernameField.sendKeys(username);
    }

    public void clearPasswordField(){
        passwordField.clear();
    }

    public void inputPasswordField(String password){
        passwordField.sendKeys(password);
    }

    public void clickLoginBtn(){
        loginBtn.click();
    }

    public void verifyWarningMessage(String message){
        if(errorMessage.size() >= 1){
            System.out.println("Expected: " + message);
            System.out.println("Result: " + errorMessage.get(0).getText());
        }
    }
}

package pages;

import helpers.GlobalVariables;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;

import java.util.List;

public class ProductsPage {
    private WebDriver webDriver;

    public ProductsPage(WebDriver webDriver){
        this.webDriver = webDriver;
        PageFactory.initElements(new AjaxElementLocatorFactory(webDriver, GlobalVariables.TIMEOUT), this);
    }

    @FindBy(xpath = "//*[@class='title']")
    List<WebElement> titlePage;

    @FindBy(id = "react-burger-menu-btn")
    WebElement burgerMenu;

    @FindBy(xpath = "//*[@class='product_sort_container']")
    WebElement sortDropDown;

    @FindBy(xpath = "//*[@value='az']")
    WebElement azSort;

    @FindBy(xpath = "//*[@value='za']")
    WebElement zaSort;

    @FindBy(xpath = "//*[@value='lohi']")
    WebElement lohiSort;

    @FindBy(xpath = "//*[@value='hilo']")
    WebElement hiloSort;

    @FindBy(id = "logout_sidebar_link")
    WebElement logoutMenu;

    public void readTitlePage(){
        if(titlePage.size() >= 1){
            System.out.println("Expected: PRODUCTS");
            System.out.println("Result: " + titlePage.get(0).getText());
        }
    }

    public void clickBurgerMenu(){
        burgerMenu.click();
    }

    public void clickSortDropDown(){
        sortDropDown.click();
    }

    public void selectSort(String sort){
        switch (sort) {
            case "az":
                azSort.click();
                break;
            case "za":
                zaSort.click();
                break;
            case "lohi":
                lohiSort.click();
                break;
            case "hilo":
                hiloSort.click();
                break;
        }
    }

    public void readSort(String desc){
        System.out.println("Sort: " + desc);
    }
}

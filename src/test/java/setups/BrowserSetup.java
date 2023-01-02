package setups;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.GeckoDriverInfo;

public class BrowserSetup {
    public WebDriver webDriver;

    private static final String BROWSER = System.getProperty("browser");
    private static final String USERDIR = System.getProperty("user.dir");

    private static BrowserSetup instance = null;

    //constructor panggil method startWebDriver
    private BrowserSetup(){
        startWebDriver();
    }

    //singleton
    public static BrowserSetup getInstance(){
        if (instance == null){
            instance = new BrowserSetup();
        }
        return instance;
    }

    //method yang didistribusikan
    public WebDriver getWebDriver(){
        return webDriver;
    }

    private void startWebDriver() {
        switch (BROWSER.toLowerCase()){
            case "chrome":
                System.setProperty("webdriver.chrome.driver", USERDIR + "/src/test/resources/webdriver/chromedriver.exe");
                ChromeOptions chOptions = new ChromeOptions();
                chOptions.addArguments("--headless");
                webDriver = new ChromeDriver();
                System.out.println("Browser: " + System.getProperty("browser"));
                break;
            case "edge":
                System.setProperty("webdriver.edge.driver", USERDIR + "/src/test/resources/webdriver/msedgedriver.exe");
                EdgeOptions edOptions = new EdgeOptions();
//                edOptions.addArguments("--headless");
                webDriver = new EdgeDriver(edOptions);
                System.out.println("Browser: " + System.getProperty("browser"));
                break;
            case "firefox":
                System.setProperty("webdriver.gecko.driver", USERDIR + "/src/test/resources/webdriver/geckodriver.exe");
                FirefoxOptions frOptions = new FirefoxOptions();
                frOptions.addPreference("acceptInsecureCerts", true);
//                frOptions.addArguments("--headless");
                webDriver = new FirefoxDriver();
                System.out.println("Browser: " + System.getProperty("browser"));
                break;
        }
    }

    public void stopWebDriver() {
        webDriver.close();
    }
}

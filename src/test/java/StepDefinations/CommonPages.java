package StepDefinations;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;


public class CommonPages extends ParentPages{
	
	WebDriver driver=getDriver();
	
	@Given("^user is on the landing page of the openMRS application$")
	public void user_is_on_the_landing_page_of_the_openmrs_application() throws Throwable {
		//System.setProperty("webdriver.chrome.driver", "C:\\Softwares\\chromedriver.exe");
		//driver=new ChromeDriver();
		driver.get("https://demo.openmrs.org/openmrs/login.htm");
		driver.manage().window().maximize();
		Thread.sleep(2000);

}
}

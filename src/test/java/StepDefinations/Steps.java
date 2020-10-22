package StepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps extends ParentPages

{
	
	WebDriver driver=getDriver();
	
	
	@When("^user provides valid (.+) and (.+)$")
	public void user_provides_valid_and(String uName, String pass) throws Throwable {

		driver.findElement(By.id("username")).sendKeys(uName);
		driver.findElement(By.id("password")).sendKeys(pass);
	}

	@And("^click on location as Inpatient ward$")
	public void click_on_location_as_inpatient_ward() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"Inpatient Ward\"]")).click();
	}

	@And("^than click on Login$")
	public void than_click_on_login() throws Throwable {
		driver.findElement(By.id("loginButton")).click();
	}


	@Then("^verify that the user logged in as an Inpatient ward$")
	public void verify_that_the_user_logged_in_as_an_inpatient_ward() throws Throwable {
		String actual=driver.getTitle();
		System.out.println(actual);

		String Expected="Home";
		if(actual==Expected)
		{
			System.out.println("login successfull");
		}else
		{
			System.out.println("login not successfull");

		}
	}	
	@And("^click on Isolation ward$")
	public void click_on_isolation_ward() throws Throwable {

		driver.findElement(By.xpath("//*[@id=\"Isolation Ward\"]")).click();

	}
	@Then("^than click on Register a Patient$")
	public void than_click_on_register_a_patient() throws Throwable {
		
		Thread.sleep(2000);
		//driver.findElement(By.linkText("https://demo.openmrs.org/openmrs/registrationapp/registerPatient.page?appId=referenceapplication.registrationapp.registerPatient")).click();
		driver.findElement(By.xpath("//*[@id=\"referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension\"]")).click();
	}
	
	
	@And("^than user logged out and quits the application successfully$")
	public void than_user_logged_out_and_quits_the_application_successfully() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id=\"navbarSupportedContent\"]/ul/li[3]/a")).click();
		//driver.findElement(By.linkText("/openmrs/appui/header/logout.action?successUrl=openmrs")).click();
		/*try {
			driver.close();
			}
			catch(Exception e) {
			  //  Block of code to handle errors
				System.out.println(e);
			}*/

}
}

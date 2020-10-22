package StepDefinations;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class ParentPages {
	
protected static WebDriver driver;
	
	protected WebDriver getDriver()
	{
		
		if(driver==null)
		{
			
			System.setProperty("webdriver.chrome.driver", "C:\\Softwares\\chromedriver.exe");
			driver=new ChromeDriver();
		}
		return driver;
	}
	

}

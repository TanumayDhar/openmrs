package runner;

import java.io.File;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\tanumay123\\Desktop\\Cucumber\\Workspace_photon\\Openmrs\\src\\test\\java\\features",
glue="StepDefinations", plugin= {"pretty","html:target/cucumberReport","json:target/cucumber.json","junit:target/cukes.xml"/*"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"*/},
monochrome=true,dryRun=false)//tags="@IsolationWardTest")

public class JunitRunner{
	/*@BeforeClass	
	public static void setUp()
	{

		ExtentCucumberFormatter.initiateExtentCucumberFormatter();

		ExtentCucumberFormatter.loadConfig(new File("C:\\Users\\tanumay123\\Desktop\\Cucumber\\Workspace_photon\\Openmrs\\extent-config.xml"));

		ExtentCucumberFormatter.addSystemInfo("Browser name","Chrome");
		ExtentCucumberFormatter.addSystemInfo("Browser version ","V86");
		ExtentCucumberFormatter.addSystemInfo("Selenium Version","V3");

	}*/

}


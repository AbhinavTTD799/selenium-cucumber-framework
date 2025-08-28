package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AddproductPage {

	public WebDriver ldriver;
	
	public AddproductPage(WebDriver rdriver)
	{
		ldriver=rdriver;
		PageFactory.initElements(ldriver, this);
	}
	
	By lnkCatalog=By.xpath("//a[@href='#']//p[contains(text(),'Catalog')]");
	By lnkProducts=By.xpath("//a[@href='/Admin/Product/List']//p[contains(text(),'Products')]");
	
	By btnAddnew=By.xpath("//a[@class='btn btn-primary']"); //Add new
		
	By txtProductname=By.xpath("//input[@id='Name']");
	By txtShortdescription=By.xpath("//textarea[@id='ShortDescription']");
	
	By txtFulldescription=By.xpath("//body[@id='tinymce']");
	
	By txtSku=By.xpath("//input[@id='Sku']");
		
	By txtCategories=By.xpath("(//input[@role='searchbox'])[1]");
	By lstitemComputers=By.xpath("(//li[contains(text(),'Computers')])[1]");

	By btnPrice=By.xpath("//label[contains(text(),'Price')]");
	By txtPrice=By.xpath("//input[@id='Price']");
	By txtIsTaxExempt=By.xpath("//input[@id='IsTaxExempt']");

	By txtWeight=By.xpath("//input[@id='Weight']");
	By txtLength=By.xpath("//input[@id='Length']");
	By txtWidth=By.xpath("//input[@id='Width']");
	By txtHeight=By.xpath("//input[@id='Height']");
	
	By txtInventoryMethod=By.xpath("//select[@id='ManageInventoryMethodId']/option[text()=\"Don't track inventory\"]");
		
	By btnSave=By.xpath("//button[@name='save']");
	
	//Actions Methods
			
	public String getPageTitle()
	{
		return ldriver.getTitle();
	}
	
	public void clickOnCatalog() {
		ldriver.findElement(lnkCatalog).click();
	}

	public void clickOnProducts() {
		ldriver.findElement(lnkProducts).click();
	}
	
	public void clickOnAddnew() {
		ldriver.findElement(btnAddnew).click();
	}
	
	public void setProductname(String productname)
	{
		ldriver.findElement(txtProductname).sendKeys(productname);
	}
	
	public void setShortdescription(String shortdescription)
	{
		ldriver.findElement(txtShortdescription).sendKeys(shortdescription);
	}
	
	public void setFulldescription(String fulldescription)
	{
		ldriver.switchTo().frame("FullDescription_ifr");
		ldriver.findElement(txtFulldescription).sendKeys(fulldescription);
		ldriver.switchTo().defaultContent();
	}
	
	public void setSku(String sku)
	{
		ldriver.findElement(txtSku).sendKeys(sku);
	}
	
	public void clickOnCategories() {
		ldriver.findElement(txtCategories).click();
	}
	
	public void clickOnComputers() {
		ldriver.findElement(lstitemComputers).click();
	}
	
	public void setPrice(String price)
	{
		ldriver.findElement(btnPrice).click();
		ldriver.findElement(txtPrice).sendKeys(price);
	}
	
	public void clickIsTaxExempt()
	{
		ldriver.findElement(txtIsTaxExempt).click();
	}
	
	public void setWeight(String weight)
	{
		ldriver.findElement(txtWeight).sendKeys(weight);
		
	}
	
	public void setLength(String length)
	{
		ldriver.findElement(txtLength).sendKeys(length);
	}
		
	public void setWidth(String width)
	{
		ldriver.findElement(txtWidth).sendKeys(width);
	}
		
	public void setHeight(String height)
	{
		ldriver.findElement(txtHeight).sendKeys(height);
	}
	
	public void clickOnInventoryMethod()
	{
		ldriver.findElement(txtInventoryMethod).click();
	}
	
	public void clickOnSave()
	{
		ldriver.findElement(btnSave).click();
	}

	
}

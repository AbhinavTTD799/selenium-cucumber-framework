Feature: Products 

@regression
Scenario: Add new Product 
	Given User Launch Chrome browser 
	When User opens URL "http://admin-demo.nopcommerce.com/login" 
	And User enters Email as "admin@yourstore.com" and Password as "admin" 
	And Click on Login 
	Then User can view Dashboad 
	When User click on Catalog 
	And click on Products 
	And click on Add new button1 
	Then User can view Add new product 
	When User enter product info 
	And click on Save button 
	Then User can view product confirmation message "The new product has been added successfully." 
	And close browser
	
@sanity
Scenario Outline: Add new Product and Data Driven 
	Given User Launch Chrome browser 
	When User opens URL "http://admin-demo.nopcommerce.com/login" 
	And User enters Email as "<email>" and Password as "<password>" 
	And Click on Login 
	Then User can view Dashboad 
	When User click on Catalog 
	And click on Products 
	And click on Add new button1 
	Then User can view Add new product 
	When User enter product info 
	And click on Save button 
	Then User can view product confirmation message "The new product has been added successfully." 
	And close browser
	
	Examples: 
		| email                 | password |
		| admin@yourstore.com	| admin    |
		| admin@yourstore.com   | admin	   |
		| admin@yourstore.com	| admin    |
		| admin@yourstore.com   | admin	   |
		| admin@yourstore.com	| admin    |
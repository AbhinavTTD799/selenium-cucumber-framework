$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Products1.feature");
formatter.feature({
  "name": "Products",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add new Product and Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "User can view Dashboad",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "When "
});
formatter.step({
  "name": "click on Products",
  "keyword": "And "
});
formatter.step({
  "name": "click on Add new button1",
  "keyword": "And "
});
formatter.step({
  "name": "User can view Add new product",
  "keyword": "Then "
});
formatter.step({
  "name": "User enter product info",
  "keyword": "When "
});
formatter.step({
  "name": "click on Save button",
  "keyword": "And "
});
formatter.step({
  "name": "User can view product confirmation message \"The new product has been added successfully.\"",
  "keyword": "Then "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add new Product and Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdef.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Dashboad",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_Dashboad()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Products",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Add new button1",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Add_new_button1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Add new product",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_Add_new_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter product info",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_enter_product_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view product confirmation message \"The new product has been added successfully.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_product_confirmation_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new Product and Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdef.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Dashboad",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_Dashboad()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Products",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Add new button1",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Add_new_button1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Add new product",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_Add_new_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter product info",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_enter_product_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view product confirmation message \"The new product has been added successfully.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_product_confirmation_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new Product and Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdef.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Dashboad",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_Dashboad()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Products",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Add new button1",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Add_new_button1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Add new product",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_Add_new_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter product info",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_enter_product_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view product confirmation message \"The new product has been added successfully.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_product_confirmation_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new Product and Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdef.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Dashboad",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_Dashboad()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Products",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Add new button1",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Add_new_button1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Add new product",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_Add_new_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter product info",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_enter_product_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view product confirmation message \"The new product has been added successfully.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_product_confirmation_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new Product and Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdef.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Dashboad",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_Dashboad()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Products",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Add new button1",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Add_new_button1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Add new product",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_Add_new_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter product info",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_enter_product_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view product confirmation message \"The new product has been added successfully.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_product_confirmation_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.close_browser()"
});
formatter.result({
  "status": "passed"
});
});
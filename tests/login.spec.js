import { test, expect } from '@playwright/test';

import logindata from "../testData/login.json"

test("Verify login with valid credentials", async ({ page }) => {

    //Actions
  await page.goto("https://www.saucedemo.com/v1/")

  await page.locator("input[data-test='username']").fill(logindata.username)

  await page.locator("input[type='password']").fill(logindata.password)

  await page.locator("input[type='submit']").click()

  //Assertions
  await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")

})

test("Verify login with Valid username and Invalid password", async ({ page }) => {

    //Actions
  await page.goto("https://www.saucedemo.com/v1/")

  await page.locator("input[data-test='username']").fill("standard_user")

  await page.locator("input[type='password']").fill("test")

  await page.locator("input[type='submit']").click()

  //Assertions
  await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()

})

test("Verify login with InValid username and valid password", async ({ page }) => {

    //Actions
  await page.goto("https://www.saucedemo.com/v1/")

  await page.locator("input[data-test='username']").fill("test")

  await page.locator("input[type='password']").fill("secret_sauce")

  await page.locator("input[type='submit']").click()

  //Assertions
  await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()

})

test("Verify login with InValid username and Invalid password", async ({ page }) => {

    //Actions
  await page.goto("https://www.saucedemo.com/v1/")

  await page.locator("input[data-test='username']").fill("test")

  await page.locator("input[type='password']").fill("test")

  await page.locator("input[type='submit']").click()

  //Assertions
  await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()

})
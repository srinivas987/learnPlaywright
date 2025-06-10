import { test, expect } from '@playwright/test';

import logindata from "../../testData/logindata.json"

import addjobtitledata from "../../testData/addjobtitle.json"

test("Verify login and add job title", async ({ page }) =>{

    await page.goto("web/index.php/dashboard/index");
    await page.locator("input[placeholder='Username']").fill(logindata.username)
    await page.locator("input[name='password']").fill(logindata.password)
    await page.locator("button[type='submit']").click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
    await page.locator("//span[normalize-space(text())='Job']").click();
    await page.locator("//a[normalize-space(text())='Job Titles']").click();
    await page.locator("button.oxd-button.oxd-button--medium.oxd-button--secondary").click();
    await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill(addjobtitledata.jobtitle);
    await page.locator("(//label[normalize-space(text())='Job Description']/following::textarea)[1]").fill(addjobtitledata.jobdescription);
    await page.locator("//button[@type='submit']").click();

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')
})
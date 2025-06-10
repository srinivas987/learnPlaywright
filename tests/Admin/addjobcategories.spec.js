import { test, expect } from '@playwright/test';

import logindata from "../../testdata/logindata.json"

test("Verify login and add employeement status", async ({ page }) =>{

    await page.goto("web/index.php/dashboard/index");
    await page.locator("input[placeholder='Username']").fill(logindata.username)
    await page.locator("input[name='password']").fill(logindata.password)
    await page.locator("button[type='submit']").click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
    await page.locator("//span[normalize-space(text())='Job']").click();
    await page.locator("//a[normalize-space(text())='Job Categories']").click();
    await page.locator("//button[contains(.,'Add')]").click();
    await page.locator("//label[normalize-space(text())='Name']/following::input").fill("Admin Assistant");
    await page.locator("//button[@type='submit']").click();

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/jobCategory')
})
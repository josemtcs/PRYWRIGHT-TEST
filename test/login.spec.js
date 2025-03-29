const { test, expect } = require('@playwright/test');

test('login', async ({ page }) => {

  await page.goto('https://virtual.tdea.edu.co/login/index.php ');

  await page.fill('#username','jose.taborda32');
  await page.fill('#password','SpOnGa556');
  await page.click('button[id="loginbtn"]');
  await expect(page).toHaveURL('https://virtual.tdea.edu.co/my/courses.php');
});
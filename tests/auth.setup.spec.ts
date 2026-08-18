import { test } from '@playwright/test';
import path from 'path';
import { LoginPage } from '../pages/LoginPage';
import { ROLES } from '../config/roles';

/**
 * Authenticates each configured role once and saves its session to auth/<role>.json.
 * All later tests reuse these files instead of logging in again.
 */
for (const role of ROLES) {
  test(`authenticate ${role.name}`, async ({ page }) => {
    const authFile = path.join(__dirname, '..', 'auth', `${role.name}.json`);
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(role.username, role.password);
    await loginPage.expectLoggedIn();

    await page.context().storageState({ path: authFile });
  });
}



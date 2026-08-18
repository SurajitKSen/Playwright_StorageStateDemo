import { test } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { ROLES } from '../config/roles';

// Each role reuses the session saved by tests/auth.setup.spec.ts instead of logging in again.
for (const role of ROLES) {
  test.describe(role.name, () => {
    test.use({ storageState: `auth/${role.name}.json` });

    test(`open landing/inventory page using saved storageState (${role.name})`, async ({ page }) => {
      const inventoryPage = new InventoryPage(page);
      await inventoryPage.goto();
      await inventoryPage.expectLoaded();

      await page.waitForTimeout(6000);
      console.log(`Landing page test completed successfully for ${role.name}`);
    });
  });
}



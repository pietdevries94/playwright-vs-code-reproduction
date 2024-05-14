import { test, expect } from '@playwright/test';

test('cwd is subfolder', async ({ page }) => {
  // This test will pass because the test runner is executed from the root folder
  await expect(process.cwd()).toContain('subfolder');
});

import { test, expect } from '@playwright/test';

test('非活性のテスト', async ({ page }) => {
  await page.goto('/about');
  await expect(page.getByRole('button', { name: 'おせないぼたん' })).toBeDisabled();
});
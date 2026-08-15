import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

describe('HomePage', () => {
  test('all widgets are visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('[data-id="hero-block"]')).toBeVisible();
    await expect(page.locator('[data-id="hero-block"]')).toHaveScreenshot('hero-block.png');
    await expect(page.locator('[data-id="link-buttons"]')).toBeVisible();
    await expect(page.locator('[data-id="link-buttons"]')).toHaveScreenshot('link-buttons.png');
    await expect(page.locator('[data-id="footer-block"]')).toBeVisible();
    await expect(page.locator('[data-id="footer-block"]')).toHaveScreenshot('footer-block.png');
  });
});

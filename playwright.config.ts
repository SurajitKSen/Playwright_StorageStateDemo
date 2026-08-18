import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  globalSetup: require.resolve('./global-setup'),
  use: {
    ...devices['Desktop Chrome'],
    baseURL: process.env.BASE_URL,
  },
  projects: [
    { name: 'setup', testMatch: '**/auth.setup.spec.ts' },
    { name: 'chromium', testMatch: '**/landing.spec.ts', dependencies: ['setup'] },
  ],
});

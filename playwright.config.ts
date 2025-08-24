import { defineConfig, devices } from "@playwright/test";
import { env } from "@utils";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  testDir: "./tests/",
  timeout: 180 * 1_000,
  expect: {
    timeout: 50 * 1_000,
  },

  reporter: [
    ["list"],
    ["junit", { outputFile: "test-results/junit-results.xml" }],
    ["html", { outputFolder: "playwright-report", open: "never" }],
  ],

  use: {
    headless: true,
    baseURL: env.EXCEL_BASEURL,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "setup",
      testMatch: /.*auth-setup.spec.ts/,
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Chromium",
      testIgnore: /.*auth-setup.spec.ts/,
      use: {
        ...devices["Desktop Chrome"],
        storageState: "storageState.json",
        permissions: ["clipboard-read", "clipboard-write"],
      },
    },
  ],

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? "100%" : "50%",

  outputDir: "test-results/",
});

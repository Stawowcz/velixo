# Playwright Test Automation – Excel Online

Automated end-to-end tests for **Excel Online** using **Playwright + TypeScript**, with Page Object Model, custom fixtures, and assertions.

The main objective of this framework is to verify the **Excel `TODAY()` function** inside a blank workbook in **Chrome (Chromium)**.  
The test suite implements three independent retry strategies (`for` loop, `toPass`, and `poll`) to ensure stability in an environment where cell values are rendered dynamically.

These tests can be executed locally or through **GitHub Actions CI**, with results stored as HTML reports and traces.

---

## Installation

```bash
git clone https://github.com/Stawowcz/velixo.git
cd velixo
npm install
```

---

## Configuration

Create a `.env` file with the following variables in the root folder of repo:

```bash
EXCEL_BASEURL=https://excel.cloud.microsoft/  
EXCEL_USER=your_email  
EXCEL_PASSWORD=your_password
```

In **CI**, these values are securely provided via **GitHub Secrets**.

---

## Setup

A dedicated **setup test script** is included to handle authentication and generate a valid `storageState.json`.  
This allows tests to re-use the logged-in session instead of going through the login flow every time.

Run the setup project:
```bash
npm run test:setup
```

This will:

- Launch a login flow using credentials from `.env` (`EXCEL_USER`, `EXCEL_PASSWORD`).
- Save the authenticated session into `storageState.json`.
- Allow subsequent test runs (`npm run test:main:chrome`, etc.) to skip manual login.

In **CI**, the `storageState.json` is restored from the `EXCEL_STORAGE_STATE` GitHub Secret instead of being generated locally.

---

## Running Tests Locally

Run only main tests in Chromium (headless), using existing `storageState.json` (without setup):  

```bash
npm run test:main:chrome
```

Run in debug mode in Chromium:

```bash
npm run test:main:chrome:debug
```

---

## Reporting

- HTML reporter configured in `playwright.config.ts`.
- Trace files (`on-first-retry`) are captured automatically.
- To view the HTML report after a run:

```bash
npm run report
```

---

## Running Test on CI/CD

Tests run automatically in GitHub Actions:

- Triggered on push and pull requests to `main`.
- Can also be started manually via **workflow dispatch**.
- Upload the **HTML report** and **traces** as artifacts.

---

## Documentation

Additional documentation is available in:

- [docs/TEST_CASES_TASK_1.md](docs/TEST_CASES_TASK_1.md)
- [docs/TEST_ASSUMPTIONS_TASK_2.md](docs/TEST_ASSUMPTIONS_TASK_2.md)

### [docs/TEST_CASES_TASK_1.md](docs/TEST_CASES_TASK_1.md) includes:

- Tests documentation for task 1

### [docs/TEST_ASSUMPTIONS_TASK_2.md](docs/TEST_ASSUMPTIONS_TASK_2.md) includes:

- Test assumptions and design choices.
- Framework authentication setup
- CI/CD details.
- Framework structure and additional deliverables
- Bottlenecks, limitations, and implemented workarounds.
- Alternative approaches for verifying Excel formulas.

---

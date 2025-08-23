# Playwright Test Automation – Excel Online

Automated end-to-end tests for **Excel Online** using **Playwright + TypeScript**, with Page Object Model, custom fixtures, and soft assertions.

The main objective of this framework is to verify the **Excel `TODAY()` function** inside a blank workbook in **Chrome (Chromium)**.  
The test suite implements three independent retry strategies (`for` loop, `toPass`, and `poll`) to ensure stability in an environment where cell values are rendered dynamically.

These tests can be executed locally or through **GitHub Actions CI**, with results stored as HTML reports and traces.

---

## Installation

git clone https://github.com/Stawowcz/velixo.git  
cd velixo  
npm install  

---

## Configuration

Create a `.env` file with the following variables in the root folder of repo:

EXCEL_BASEURL=https://excel.cloud.microsoft/  
EXCEL_USER=****** 
EXCEL_PASSWORD=******

In **CI**, these values are securely provided via **GitHub Secrets**.

---

## Running Tests

Run all tests:  
npm run test  

Run in debug mode (Chromium):  
npm run test:debug:chrome  

Run tests in specific browsers (if configured in `playwright.config.ts`):  
npm run test:chrome   

---

## Reporting

- HTML reporter configured in `playwright.config.ts`.  
- Trace files (`on-first-retry`) are captured automatically.  
- To view the HTML report after a run:  
  npm run report 

---

## CI/CD

The pipeline (`.github/workflows/tests.yml`) is configured to:

- Trigger on push (to `main`), pull request, and manual dispatch.  
- Use **GitHub Secrets** for credentials (`EXCEL_BASEURL`, `EXCEL_USER`, `EXCEL_PASSWORD`).  
- Install dependencies and Playwright browsers.  
- Run Playwright tests in **Chromium** (currently the only configured project).  
- Traces are captured **on-first-retry** for debugging (as defined in `playwright.config.ts`).  
- Upload **HTML report** and **traces** as build artifacts.

---

## Documentation

Additional documentation is available in:
`docs/TEST_CASES_TASK_1.md`
`docs/TEST_ASSUMPTIONS_TASK_2.md`

This `docs/ TEST_CASES_TASK_1.md` includes:

- Tests documentation for task 1

This `docs/TEST_ASSUMPTIONS_TASK_2.md` includes:

- Test assumptions and design choices.  
- Bottlenecks, limitations, and implemented workarounds.  
- Alternative approaches for verifying Excel formulas.  
- CI/CD details and known issues.  

---

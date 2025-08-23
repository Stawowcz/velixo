# Test Assumptions – Task 2

## 1. Framework and Implementation
- Implemented using **Playwright with TypeScript**.
- The end-to-end test verifies the **Excel Online `TODAY()` function** in Chrome.
- Three different strategies are provided:
  1. **Regular `for` loop** – retries up to 10 times until the expected value matches.
  2. **`expect().toPass()`** – automatically retries until the condition passes or timeout is reached.
  3. **`expect.poll()`** – continuously polls at fixed intervals until the result matches the expectation.
- Credentials and configuration data are stored in a **separate `.env` file**, not hardcoded.
- Debugging is supported by attaching clipboard values from each attempt to the test report.

---

## 2. Continuous Integration (CI)
- **GitHub Actions CI pipeline** is configured.
- Pipeline steps include:
  - Install dependencies (`npm ci`).
  - Run Playwright tests across supported browsers.
  - Generate **Playwright HTML report**.
  - Upload the report as an **artifact** for inspection.
- This ensures consistent execution on every commit or pull request.

---

## 3. Additional Deliverables and Assumptions
- **Repository structure**:
  - `src/pages`, `src/utils`, `src/fixtures`, `src/types` – clean separation of concerns.
  - `tests/` directory with well-structured test files.
  - `docs/` directory with all documents and recording
- **Demo recording** prepared to showcase test execution.
- **Documentation** (this file) explains assumptions, design, and limitations.

---

## 4. Bottlenecks / Limitations / Workarounds
- **Clipboard dependency**  
  The test uses the clipboard to verify the result of the `TODAY()` formula.  
  - *Limitation*: Clipboard permissions must be granted for the browser context.  
  - *Workaround*: Permissions are explicitly requested in the test configuration.  

- **Excel Online rendering**  
  Excel Online renders cells in a way that prevents direct DOM-based value extraction.  
  - *Limitation*: Standard selectors (e.g., `page.locator()`) cannot be used to read formula results.  
  - *Workaround*: Clipboard approach ensures reliable value capture.  

- **Execution flakiness**  
  Formula evaluation may take additional time on Excel Online servers.  
  - *Limitation*: Occasional mismatches between expected and actual values.  
  - *Workaround*: Implemented retries via three strategies (`for`, `toPass`, `poll`) with extended timeouts.  

- **Browser scope**  
  Tests are optimized for Chromium/Chrome due to stable clipboard implementation.  
  - *Limitation*: Cross-browser support may be inconsistent.  
  - *Workaround*: CI runs default in Chromium, while Firefox/WebKit can be added with adjustments.  

---

## 5. Alternative Solutions
- **DOM-based validation**  
  If Microsoft exposed accessible DOM elements for cell values, we could directly assert cell contents. Currently not feasible.  

- **API-level validation**  
  With access to Microsoft Graph API, it would be possible to query the workbook state and assert the value programmatically.  

---

✅ Requirements covered:
- TypeScript + Playwright end-to-end test.
- Config data stored separately.
- Test framework integration.
- GitHub CI pipeline.
- Demo recording + documentation.
- Clear bottlenecks, limitations, workarounds, and alternative solutions.

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
  - `src/pages`, `src/utils`, `src/fixtures`, `src/data` – clean separation of concerns.
  - `tests/` directory with well-structured test files.
- **Demo recording** prepared to showcase test execution.
- **Documentation** (this file) explains assumptions, design, and limitations.

### FAQ / Known Bottlenecks & Workarounds
- **Clipboard dependency** – Reading cell values uses the clipboard API. If permissions are missing, tests may fail.
- **Execution flakiness** – Excel Online may delay cell evaluation. This is mitigated with retries (`for`, `toPass`, `poll`).
- **Alternative approach** – Direct DOM assertions are limited, since Excel Online renders via canvas. Clipboard remains the most stable method.
- **Browser scope** – Optimized for **Chromium/Chrome**. Other browsers may have inconsistent clipboard behavior.

---

✅ Requirements covered:
- TypeScript + Playwright end-to-end test.
- Config data stored separately.
- Test framework integration.
- GitHub CI pipeline.
- Demo recording + documentation.

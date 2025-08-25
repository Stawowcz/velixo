# Test Cases – Increment String Algorithm

## Overview

The purpose of this document is to test an algorithm that **increments a string** according to the following rules:

- **Valid input:** 1–4 letters (A–Z or a–z) followed by 1–4 digits (0–9).
- **Operation:** The algorithm increments the **numeric suffix** by 1 while keeping the letter prefix unchanged.
- **Overflow:** If the numeric part exceeds its maximum value, it resets back to all zeros (e.g., `A9999 → A0000`).
- **Invalid input:** If the input does not follow the required format, the algorithm returns **`Error`**.
- **Letters can be uppercase or lowercase** (case-preserving).
- Only **English alphabet letters (A–Z, a–z)** are allowed.

## Testing Goals

- Verify correct behavior for **valid inputs** across different lengths and formats.
- Validate **boundary conditions** such as minimum/maximum digits, letters, and overflow cases.
- Ensure proper **error handling** for invalid inputs (e.g., missing letters/digits, too many characters, special symbols).

---

## 1. Valid Cases

| **ID** | **Input**  | **Expected Output** | **Description**                            |
| ------ | ---------- | ------------------- | ------------------------------------------ |
| TC1    | `A0`       | `A1`                | Minimum valid case (1 letter + 1 digit)    |
| TC2    | `AB1`      | `AB2`               | 2 letters + 1 digit                        |
| TC3    | `XYZ9`     | `XYZ0`              | 3 letters + 1 digit with overflow          |
| TC4    | `FX001`    | `FX002`             | Standard case with leading zeros           |
| TC5    | `ZZ100`    | `ZZ101`             | 2 letters + 3 digits                       |
| TC6    | `abcd0001` | `abcd0002`          | Lowercase letters + 4 digits               |
| TC7    | `X0999`    | `X1000`             | Transition from 3-digit to 4-digit number  |
| TC8    | `ZZZZ1234` | `ZZZZ1235`          | Maximum 4 letters + 4 digits (no overflow) |
| TC9    | `Ab9`      | `Ab0`               | Mixed case letters preserved               |
| TC10   | `AA0099`   | `AA0100`            | Leading zeros with overflow handled        |

---

## 2. Boundary Cases

| **ID** | **Input**  | **Expected Output** | **Description**                                |
| ------ | ---------- | ------------------- | ---------------------------------------------- |
| TC11   | `Z0000`    | `Z0001`             | Minimal numeric value (all zeros)              |
| TC12   | `Z9999`    | `Z0000`             | Max numeric value with overflow                |
| TC13   | `AAAA9`    | `AAAA0`             | Max letters + 1 digit with overflow            |
| TC14   | `A9999`    | `A0000`             | 1 letter + max digits with overflow            |
| TC15   | `AAAA9999` | `AAAA0000`          | Max length: 4 letters + 4 digits with overflow |
| TC16   | `AAAA0`    | `AAAA1`             | Max letters + min digits                       |
| TC17   | `zzzz9`    | `zzzz0`             | Max lowercase letters + 1 digit with overflow  |

---

## 3. Invalid Cases

| **ID** | **Input**  | **Expected Output** | **Description**                     |
| ------ | ---------- | ------------------- | ----------------------------------- |
| TC18   | `1234`     | `Error`             | No letters present                  |
| TC19   | `ABCD`     | `Error`             | No digits present                   |
| TC20   | `ABCDE123` | `Error`             | Too many letters (>4)               |
| TC21   | `AB12345`  | `Error`             | Too many digits (>4)                |
| TC22   | `AB12CD`   | `Error`             | Letters after digits – wrong format |
| TC23   | `A12!`     | `Error`             | Invalid character `!`               |
| TC24   | ` A12`     | `Error`             | Leading whitespace                  |
| TC25   | `A12 `     | `Error`             | Trailing whitespace                 |
| TC26   | `` (empty) | `Error`             | Empty string                        |
| TC27   | `0001`     | `Error`             | Digits only with leading zeros      |
| TC28   | `AB#12`    | `Error`             | Symbol inside string                |
| TC29   | `ĄB12`     | `Error`             | Non-ASCII character (outside A–Z)   |

---

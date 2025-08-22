# Test Cases – Increment String Algorithm

## 1. Valid Cases

| **ID** | **Input**   | **Expected Output** | **Description** |
|--------|-------------|---------------------|-----------------|
| TC1    | `A0`        | `A1`                | Minimum valid case (1 letter + 1 digit) |
| TC2    | `AB1`       | `AB2`               | 2 letters + 1 digit |
| TC3    | `XYZ9`      | `XYZ0`              | 3 letters + 1 digit with overflow |
| TC4    | `FX001`     | `FX002`             | Standard case with leading zeros |
| TC5    | `ZZ100`     | `ZZ101`             | 2 letters + 3 digits |
| TC6    | `abcd0001`  | `abcd0002`          | Lowercase letters + 4 digits |
| TC7    | `ABCD0099`  | `ABCD0100`          | Leading zeros increment |
| TC8    | `X0009`     | `X0010`             | Transition from 1-digit to 2-digit number |
| TC9    | `X0999`     | `X1000`             | Transition from 3-digit to 4-digit number |
| TC10   | `ZZZZ1234`  | `ZZZZ1235`          | Maximum 4 letters + 4 digits (no overflow) |

---

## 2. Boundary Cases

| **ID** | **Input**     | **Expected Output** | **Description** |
|--------|---------------|---------------------|-----------------|
| TC11   | `Z0000`       | `Z0001`             | Minimal numeric value (all zeros) |
| TC12   | `Z9999`       | `Z0000`             | Max numeric value with overflow |
| TC13   | `A1`          | `A2`                | Shortest allowed format (1 letter + 1 digit) |
| TC14   | `AAAA9`       | `AAAA0`             | Max letters + 1 digit with overflow |
| TC15   | `A9999`       | `A0000`             | 1 letter + max digits with overflow |
| TC16   | `AAAA9999`    | `AAAA0000`          | Max length: 4 letters + 4 digits with overflow |

---

## 3. Invalid Cases

| **ID** | **Input**     | **Expected Output** | **Description** |
|--------|---------------|---------------------|-----------------|
| TC17   | `1234`        | `Error`             | No letters present |
| TC18   | `ABCD`        | `Error`             | No digits present |
| TC19   | `ABCDE123`    | `Error`             | Too many letters (>4) |
| TC20   | `AB12345`     | `Error`             | Too many digits (>4) |
| TC21   | `AB12CD`      | `Error`             | Letters after digits – wrong format |
| TC22   | `A12!`        | `Error`             | Invalid character `!` |
| TC23   | ` A12`        | `Error`             | Leading whitespace |
| TC24   | `A12 `        | `Error`             | Trailing whitespace |
| TC25   | `` (empty)    | `Error`             | Empty string |

---

## Assumptions

- The algorithm increments **only the numeric part**; letters remain unchanged.  
- **Overflow** resets the numeric part to all zeros (e.g., `A9999 → A0000`).  
- Letters can be **uppercase or lowercase** (case-insensitive).  
- Valid input format is always: **1–4 letters + 1–4 digits**, no spaces or special characters.  

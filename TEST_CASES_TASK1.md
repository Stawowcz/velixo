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
| TC11   | `Ab9`       | `Ab0`               | Mixed case letters preserved |
| TC12   | `AA0099`    | `AA0100`            | Leading zeros with overflow handled |

---

## 2. Boundary Cases

| **ID** | **Input**     | **Expected Output** | **Description** |
|--------|---------------|---------------------|-----------------|
| TC13   | `Z0000`       | `Z0001`             | Minimal numeric value (all zeros) |
| TC14   | `Z9999`       | `Z0000`             | Max numeric value with overflow |
| TC15   | `A1`          | `A2`                | Shortest allowed format (1 letter + 1 digit) |
| TC16   | `AAAA9`       | `AAAA0`             | Max letters + 1 digit with overflow |
| TC17   | `A9999`       | `A0000`             | 1 letter + max digits with overflow |
| TC18   | `AAAA9999`    | `AAAA0000`          | Max length: 4 letters + 4 digits with overflow |
| TC19   | `AAAA0`       | `AAAA1`             | Max letters + min digits |
| TC20   | `A0000`       | `A0001`             | Min letters + max digits |
| TC21   | `zzzz9`       | `zzzz0`             | Max lowercase letters + 1 digit with overflow |

---

## 3. Invalid Cases

| **ID** | **Input**     | **Expected Output** | **Description** |
|--------|---------------|---------------------|-----------------|
| TC22   | `1234`        | `Error`             | No letters present |
| TC23   | `ABCD`        | `Error`             | No digits present |
| TC24   | `ABCDE123`    | `Error`             | Too many letters (>4) |
| TC25   | `AB12345`     | `Error`             | Too many digits (>4) |
| TC26   | `AB12CD`      | `Error`             | Letters after digits – wrong format |
| TC27   | `A12!`        | `Error`             | Invalid character `!` |
| TC28   | ` A12`        | `Error`             | Leading whitespace |
| TC29   | `A12 `        | `Error`             | Trailing whitespace |
| TC30   | `` (empty)    | `Error`             | Empty string |
| TC31   | `0001`        | `Error`             | Digits only with leading zeros |
| TC32   | `AB#12`       | `Error`             | Symbol inside string |
| TC33   | `ĄB12`        | `Error`             | Non-ASCII character (outside A–Z) |

---

## Assumptions

- The algorithm increments **only the numeric part**; letters remain unchanged.  
- **Overflow** resets the numeric part to all zeros (e.g., `A9999 → A0000`).  
- Letters can be **uppercase or lowercase** (case-preserving).  
- Valid input format is always: **1–4 letters + 1–4 digits**, no spaces or special characters.  
- Only **English alphabet letters (A–Z, a–z)** are allowed.  

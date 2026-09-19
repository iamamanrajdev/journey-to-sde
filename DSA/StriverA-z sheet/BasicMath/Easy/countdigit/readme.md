# Count Digits in Number

**Difficulty:** Easy · **Language:** JavaScript
**Source:** [geeksforgeeks.org/problems/count-total-digits-in-a-number/1](https://www.geeksforgeeks.org/problems/count-total-digits-in-a-number/1)
**Sheet:** Striver's A2Z DSA Sheet → Basic Math → Easy

---

## Problem Statement

Given a number `n`, return the count of digits in this number.

### Examples

**Example 1**
```
Input:  n = 1567
Output: 4
```
There are 4 digits in `1567`, which are `1`, `5`, `6` and `7`.

**Example 2**
```
Input:  n = 99999
Output: 5
```
Number of digits in `99999` is `5`.

### Constraints

```
1 <= n <= 10^9
```

---

## Approach

1. Start with `count = 0`.
2. While `n > 0`, keep dividing `n` by `10` (dropping the last digit each time) and increment `count`.
3. Once `n` becomes `0`, `count` holds the total number of digits.

---

## Solution

```javascript
function countdigit(n) {
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

console.log(countdigit(123)); // 3
```

---

## Complexity

| Metric | Complexity | Reason                                   |
|--------|-----------|--------------------------------------------|
| Time   | `O(log n)` | One iteration per digit of `n`            |
| Space  | `O(1)`     | Only a single counter variable is used    |

---

## Optimization: Without a Loop

The digit count can also be found in `O(1)` time using logarithms:

```javascript
function countdigit(n) {
    if (n === 0) return 1;
    return Math.floor(Math.log10(n)) + 1;
}
```

This works because `log10(n)` roughly gives the number of digits minus one — flooring it and adding `1` gives the exact digit count. Watch out for floating-point edge cases around exact powers of 10 (e.g. `1000`), which is why the loop-based approach above is often preferred in interviews for its clarity and safety.
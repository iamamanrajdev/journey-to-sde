# Prime Number

**Difficulty:** Easy (GFG) · Medium (Striver Sheet) · **Language:** JavaScript
**Source:** [geeksforgeeks.org/problems/prime-number2314/1](https://www.geeksforgeeks.org/problems/prime-number2314/1)
**Sheet:** Striver's A2Z DSA Sheet → Basic Math → Check for Prime

---

## Problem Statement

Given a number `n`, determine whether it is a **prime number** or not.

> **Note:** A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.

### Examples

**Example 1**
```
Input:  n = 7
Output: true
```
`7` has exactly two divisors: `1` and `7`, making it a prime number.

**Example 2**
```
Input:  n = 25
Output: false
```
`25` has more than two divisors: `1`, `5`, and `25`, so it is not prime.

**Example 3**
```
Input:  n = 1
Output: false
```
`1` has only one divisor (itself), which is not sufficient for it to be considered prime.

### Constraints

```
1 <= n <= 10^9
```

---

## Approach

1. Count how many numbers from `1` to `n` divide `n` exactly.
2. If that count is exactly `2` (only `1` and `n` itself), `n` is prime.
3. Otherwise, it isn't.

---

## Solution

```javascript
function checkprime(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        return true; // we can write count === 2 directly too, since it gives true or false
    } else {
        return false;
    }
}

console.log(checkprime(3)); // true
```

---

## Complexity

| Metric | Complexity | Reason                                  |
|--------|-----------|-------------------------------------------|
| Time   | `O(n)`    | Loop runs from `1` to `n`                 |
| Space  | `O(1)`    | Only a counter variable is used           |

---

## Optimization: √n Approach

Checking divisibility only up to `√n` is enough — if `n` has a divisor greater than `√n`, it must also have a matching one smaller than `√n`, so it would already have been caught.

```javascript
function checkprime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
```

This reduces the time complexity from `O(n)` to `O(√n)`, which matters a lot for large values of `n` (up to `10^9` here).
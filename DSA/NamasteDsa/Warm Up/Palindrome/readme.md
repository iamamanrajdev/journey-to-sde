# Palindrome Number — LeetCode 9 Solution (JavaScript)

## Problem
**LeetCode 9 — Palindrome Number**
🔗 **Question:** https://leetcode.com/problems/palindrome-number/description/
Language: JavaScript

Given an integer `n`, return `true` if `n` is a palindrome, otherwise return `false`.

A palindrome number reads the same from left to right and right to left.

**Examples**

```
121  → true
1221 → true
123  → false
10   → false
```

---

## Approach

The idea is to reverse the number and then compare the reversed number with the original number.

**Steps**

1. Store the original number in a separate variable.
2. Initialize `reverse = 0`.
3. Get the last digit using `% 10`.
4. Add that digit to the reversed number.
5. Remove the last digit using `Math.floor(n / 10)`.
6. Repeat until `n` becomes `0`.
7. Compare `reverse` with `original`.
8. If both are equal, the number is a palindrome.

---

## Logic

For `121`:

```
original = 121
reverse = 0

1st iteration:
digit = 121 % 10 = 1
reverse = 0 * 10 + 1 = 1
n = 12

2nd iteration:
digit = 12 % 10 = 2
reverse = 1 * 10 + 2 = 12
n = 1

3rd iteration:
digit = 1 % 10 = 1
reverse = 12 * 10 + 1 = 121
n = 0
```

Now:

```
reverse = 121
original = 121
121 === 121 → true
```

---

## JavaScript Solution

```javascript
function checkpalindrome(n) {
    let reverse = 0;
    let original = n;
    while (n > 0) {
        let rem = n % 10;
        reverse = (reverse * 10) + rem;
        n = Math.floor(n / 10);
    }
    if (reverse === original) {
        return true;
    } else {
        return false;
    }
}
```

### Why do we store `original`?

Inside the loop, `n` keeps changing:

```
121 → 12 → 1 → 0
```

So after the loop, we cannot compare `reverse` with `n`.

That's why we save:

```javascript
let original = n;
```

and compare:

```javascript
reverse === original
```

---

## Time Complexity

`O(log n)` — We process each digit of the number.

## Space Complexity

`O(1)` — We only use a few variables.

---

## Key Learning

The main concept learned from this problem:

To reverse a number, repeatedly extract the last digit using `% 10` and remove it using `Math.floor(n / 10)`.

This same pattern is useful for many digit-based DSA problems.

Note: `n > 0` also naturally rejects negative numbers, matching LeetCode's rule
that negatives are never palindromes (unlike the GFG version below).

---

## Variant: GFG — Palindrome Number (Negative = Palindrome)

🔗 **Question:** https://www.geeksforgeeks.org/problems/palindrome0746/1

GFG's rule is different: it **ignores the sign**, so `-121` → `true`.
LeetCode would return `false` for the same input.

### What changes in the logic

Since `n > 0` alone would skip negative numbers, we now take the absolute
value up front — both when storing `original` and when peeling digits —
so the sign never affects the comparison.

### JavaScript Solution

```javascript
function isPalindrome(n) {
    let original = Math.abs(n);
    let reverse = 0;

    while (n !== 0) {
        let rem = Math.abs(n % 10);
        reverse = (reverse * 10) + rem;
        n = Math.floor(Math.abs(n) / 10);
    }

    return original === reverse;
}
```

### Why `Math.abs` twice?

- On `original`: so `-121` is compared as `121`, not `-121`.
- On `n % 10`: JavaScript's `%` can return a **negative remainder** when `n`
  is negative (e.g. `-121 % 10 = -1`, not `1`). Without `Math.abs`, the
  reversed digits would be wrong.

### Complexity

Same as above — `O(log n)` time, `O(1)` space.
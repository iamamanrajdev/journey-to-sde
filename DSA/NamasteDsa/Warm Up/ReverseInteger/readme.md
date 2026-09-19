# Reverse Integer — LeetCode 7 Solution (JavaScript)

## Problem
**LeetCode 7 — Reverse Integer**
🔗 **Question:** https://leetcode.com/problems/reverse-integer/
Language: JavaScript

Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-2^31, 2^31 - 1]`, then return `0`.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

**Examples**

```
123  → 321
-123 → -321
120  → 21
```

---

## Approach

This is the same digit-reversal pattern as the Palindrome Number problem — the difference here is:
1. We have to **return the reversed number itself**, not just compare it.
2. We have to **preserve the sign** of the original number.
3. We have to **check for 32-bit overflow** before returning, since reversing a large number can push it outside the valid range.

**Steps**

1. Store the sign separately: `-1` if `x` is negative, `1` otherwise.
2. Work with the absolute value of `x` so the digit-extraction logic doesn't have to deal with negative remainders.
3. Initialize `reverse = 0`.
4. Loop while `x !== 0`:
   - Extract the last digit: `remainder = Math.abs(x) % 10`.
   - Push it onto `reverse`: `reverse = reverse * 10 + remainder`.
   - Strip the last digit off `x`: `x = Math.floor(Math.abs(x) / 10)`.
5. Re-apply the sign: `reverse = reverse * sign`.
6. Check the 32-bit signed integer range: `[-2^31, 2^31 - 1]`.
   - If `reverse` falls outside this range, return `0`.
7. Otherwise, return `reverse`.

---

## Logic

For `x = -123`:

```
sign = -1
original (abs) = 123
reverse = 0

1st iteration:
remainder = 123 % 10 = 3
reverse = 0 * 10 + 3 = 3
x = 12

2nd iteration:
remainder = 12 % 10 = 2
reverse = 3 * 10 + 2 = 32
x = 1

3rd iteration:
remainder = 1 % 10 = 1
reverse = 32 * 10 + 1 = 321
x = 0
```

Apply the sign back:

```
reverse = 321 * -1 = -321
```

Check range: `-321` is well within `[-2147483648, 2147483647]` → return `-321`.

---

## JavaScript Solution

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let original = x;
    let reverse = 0;
    let sign = x < 0 ? -1 : 1;

    while (x !== 0) {
        let remainder = Math.abs(x) % 10;
        reverse = (reverse * 10) + remainder;
        x = Math.floor(Math.abs(x) / 10);
    }

    reverse = reverse * sign;
    let limit = Math.pow(2, 31);
    if (reverse < -limit || reverse > limit - 1) {
        return 0;
    }

    return reverse;
};
```

### Why handle the sign separately instead of reversing the negative number directly?

If we reverse a negative number using `%` directly, JavaScript's `%` returns a **negative remainder** for negative operands (e.g. `-123 % 10 = -3`, not `3`). Stripping the sign up front and working with the absolute value keeps the digit-extraction loop clean and correct, then we multiply the sign back in at the end.

### Why check the range after reversing, not before?

We can't know whether the reversed number will overflow until we've actually built it — the same digit count can reverse into either a valid or an out-of-range number (e.g. `1563847412` → `2147483651`, which overflows). The problem also explicitly disallows using 64-bit integers to "peek ahead," so the check has to happen on the final 32-bit-intended result.

---

## Time Complexity

`O(log₁₀ x)` — one iteration per digit of `x`.

## Space Complexity

`O(1)` — only a few integer variables, no extra data structures.

---

## Key Learning

The core reversal loop (`% 10` to extract, `Math.floor(x / 10)` to strip) is identical to the Palindrome Number problem. What's new here:

- **Sign must be preserved explicitly** — extract it before the loop, reapply it after.
- **Overflow checking matters** whenever a problem constrains the output to a fixed bit-width (like signed 32-bit here). Always check *after* building the full result, not mid-loop.
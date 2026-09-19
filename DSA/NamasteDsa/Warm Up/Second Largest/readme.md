# Second Largest

**Difficulty:** Easy · **Language:** JavaScript
**Source:** [geeksforgeeks.org/problems/second-largest3735/1](https://www.geeksforgeeks.org/problems/second-largest3735/1)

---

## 📝 Problem Statement

Given an array of positive integers `arr[]`, return the **second largest** element from the array.
If the second largest element doesn't exist, return `-1`.

> **Note:** The second largest element must not be equal to the largest element.

### Examples

**Example 1**
```
Input:  arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
```
The largest element is `35` and the second largest is `34`.

**Example 2**
```
Input:  arr[] = [10, 5, 10]
Output: 5
```
The largest element is `10` and the second largest is `5`.

**Example 3**
```
Input:  arr[] = [10, 10, 10]
Output: -1
```
The largest element is `10`, and no second largest exists.

### Constraints

```
2 <= arr.size() <= 10^5
1 <= arr[i]    <= 10^5
```

---

## 💡 Approach

1. Traverse the array once to find the **largest** element (`max`).
2. Traverse the array again to find the **largest element strictly less than `max`** — this is the second largest (`secmax`).
3. If `secmax` never gets updated from `-Infinity`, no second largest exists → return `-1`. Otherwise return `secmax`.

This two-pass approach is simple and easy to reason about. See [Optimization](#-optimization-single-pass) below for a one-pass version.

---

## ✅ Solution

```javascript
function secondlarge(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    let secmax = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== max && arr[i] > secmax) {
            secmax = arr[i];
        }
    }

    return secmax === -Infinity ? -1 : secmax;
}

console.log(secondlarge([4, 4, 4, 4])); // -1
```

---

## ⏱️ Complexity

| Metric | Complexity | Reason                        |
|--------|-----------|--------------------------------|
| Time   | `O(n)`    | Two linear passes over the array |
| Space  | `O(1)`    | Only a couple of extra variables |

---

## 🚀 Optimization: Single Pass

`max` and `secmax` can be tracked together in one traversal instead of two:

```javascript
function secondlarge(arr) {
    let max = -Infinity, secmax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secmax = max;
            max = arr[i];
        } else if (arr[i] > secmax && arr[i] !== max) {
            secmax = arr[i];
        }
    }

    return secmax === -Infinity ? -1 : secmax;
}
```

Still `O(n)` time, but with a **single pass** over the array instead of two.
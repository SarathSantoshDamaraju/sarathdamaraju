---
title: == vs ===
date: '2020-07-19'
tAGS:
  - javascript
  - js-strict
description: Quick byte to understand the equality operators
---
|   |  ==  |  === |
|---|---|---|
| name |  abstract equality operator | strict equality operator  |
|  type conversion  |  Yes | No  |
| with `null`  |  `a == null // true` | `a === null` // **False**  |
| with `undefined`  |  `a == undefined // true` | `a === undefined` // true  |

```
var a;
```

Prefer to use `===` over `==`;

[Reference](https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons)

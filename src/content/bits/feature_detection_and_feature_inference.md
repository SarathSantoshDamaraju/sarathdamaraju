---
title: Feature Detection and Feature Inference
date: 19/07/2020
tAGS:
  - javascript
description: A quick explanation of the terms
---
## Feature Detection

Check to see if the browser supports the given code. <https://modernizr.com/> is best to handle feature detection.

```
if(window.localStorage) { /*...*/ } else {}
```

> 💡 This is mostly used to check the API on either Old browsers (like IE).

## Feature Inference

Feature inference checks for a feature **x** and assumes feature **y** is also available

```
if(window.Intl) {   window.Intl.Locale(); // Locale is not supported in IE}
```

> 🚨 Don't prefer to use inference.

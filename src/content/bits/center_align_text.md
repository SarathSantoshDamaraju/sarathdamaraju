---
title: Center align Text
date: '2020-06-14'
tAGS:
  - css
description: Vertically and Horizontally centre align Text to the Whole Page
---
```
/*
<body>
  <p>Hello world</p>
</body>
*/

p{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}
```

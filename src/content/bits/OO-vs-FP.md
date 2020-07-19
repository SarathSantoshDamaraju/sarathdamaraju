---
title: OOP -vs- FP
date: 21/06/2020
tags:
  - javascript
  - oop
  - functional-programming
  - js-patterns
description: Learn the basic diff b/w OOP and FP; and where to use them.
---
| Label | OOP |  FP  |
|---|---|---|
| State | Stateful | Stateless/Immutable |
| Memory Effecient | Yes |  Yes |
| DRY | Inheritance | Re-usable Functions |
| Style | Imperative | Declarative |
| Useage | On complex data | On light resuable data |
| State SideEffects | May happen | No |

## OOP
Is the way of placing all the data/state/properties and functions/actions/methods at a sample place. Depends on `Objects` and `Constructors`

- Depends on the Prototypes
- Returns an Object always

> 💡 Developer Experience is more in OOP than FP

## Functional Programming

Small light reusable functions which accepts a range of parameters and returns a value. Since Functional programming is immutable there is no way it has sideeffects, unless deliberately created.

> OOP and FP can compliment each-other

## Example
OOP: `React.Component` is an Object.
FP: `setState({})` Method is an example for FP.

#### TIP: Dont try to [learn](https://www.youtube.com/watch?v=m3svKOdZijA) OOP and FP from Underscore.js

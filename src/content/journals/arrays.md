---
title: JS Array Iterators Cheat Sheet — Part 1
description: Cheatsheet part-1 for javascript iterators forEach, map, filter and some.
tags: javascript, webdev, beginners, tutorial
date: '2020-04-21'
thumbnail: ''
---

Hey! I'm starting this new series aimed at helping beginners understand some key javascript concepts. I know that digesting all the info and being able to implement everything in the first go can be difficult for beginners, so I'll try and include a decision diagram at the end of each post. I hope it helps! Let's get started.

Iterator methods are helpful, but they can also be confusing if you don't understand the slight differences between them. This cheat sheet discusses the contrasting differences between `forEach`, `map`, `filter`, and `some`.

Before beginning...

> "You must unlearn what you have learned" - Yoda 

![Yoda quote GIF](https://thumbs.gfycat.com/DistantFairKingfisher-max-1mb.gif)

Here are a few keywords used in this article and their meanings:

* [Callback](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) - A function to be called after the current code execution.
* [Chainable](https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4) - A method to pass the returned value to the other function.
* Mutation - Change and replace the original value.


## 🥨 Array.prototype.forEach
- **Usage:** An alternative to for with advantages of scoping. Use this for ajax calls, set/get operations to be performed on each array item and go for this when no other function fits your needs.  
- **Returns:** undefined  
- **Mutation (by default):** Doesn't mutate the provided array.  
- **Breaking the loop:** Cannot skip the loop execution.  
- **Chainable:** Not Possible as it returns undefined  
- **Change in array values while iterating:**  

  > "Breath-in and breath-out before you read this" 😇  

  1. Any new data added to the array while the loop execution will be ignored. 
  2. Any data modified or deleted will be provided chainable to the forEach when forEach visits it. 
  3. Any modifications to the processed data will be ignored and deletion of the processed element might make the next element in the loop to be skipped due to the change of index.

  ![emoji explanation](https://miro.medium.com/max/2000/1*JeBZrRpS1elQae5WarPfGg.png)

- **Empty arrays/elements:** Will be ignored.  
- **undefined/null:** Will be looped.  
- **Async:** Is not supported.  

## 🍱 Array.prototype.map
- **Usage:** use this when you want to transform the given array. If you use case is not to return anything, use forEach or for...of
- **Returns:** Array and array of undefined's if callback doesn't return anything.
- **Mutation (by default):** Doesn't mutate the provided array.
- **Breaking the loop:** Cannot skip the loop execution.
- **Chainable:** Yes
- **Change in array values while iterating:** Same as forEach
- **Empty arrays/elements:** Will be ignored.
- **undefined/null:** Will be looped.

## 🥢 Array.prototype.filter
- **Usage:** To filter an array based on a given condition. If you need to return the first element matched, use Array.prototype.find()
- **Returns:** Array and empty array if nothing is filtered or callback doesn't return
- **Mutation (by default):** Doesn't mutate the provided array.
- **Breaking the loop:** Cannot skip the loop execution.
- **Chainable:** Yes
- **Change in array values while iterating:** Same as forEach
- **Empty arrays/elements:** Will be ignored.
- **undefined/null:** Will be looped.

## 🧃 Array.prototype.some
- **Usage:** Returns true if at-least one element passes the provided condition in the callback or else false
- **Returns:** boolean
- **Mutation (by default):** Doesn't mutate the provided array.
- **Breaking the loop:** Cannot skip the loop execution.
- **Chainable:** Yes
- **Change in array values while iterating:** Same as forEach
- **Empty arrays/elements:** Will be ignored.
- **undefined/null:** Will be looped.

## Decision diagram for Arrays
If you are a beginner, there will be some confusion till sometime on what iterator method to be used. I made a decision diagram for the same. Hope it helps. 🙏

![Decision diagram](https://miro.medium.com/max/3480/1*xnZRnoRe3Uh8W9uMGTRaAQ.png)


Hope you like the article, let me know your thoughts in the comments or tweet [me](https://twitter.com/krishnadamaraju)  
Cheers! 🙌  
KD  

---

##### Also published on
- [Medium](https://medium.com/small-things/js-array-iterators-cheat-sheet-part-1-8647e59a14ad)
- [DEV](https://dev.to/teamxenox/js-array-iterators-cheat-sheet-part-1-1m3k)


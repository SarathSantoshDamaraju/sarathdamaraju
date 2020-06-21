---
title: Factory Functions in JS
date: 21/06/2020
tAGS:
  - factory
  - javascript
  - js-pattern
description: Learn about factory functions usage in JS
---
Any function (**not a class**) that returns `Object` and initialised without `new` keyword is a **Factory function**.

* Unlike classes Only returned methods are Public (a.k.a **Encapsulation**)
* Factory Functions Properties and Methods are allocated to a new memory on every initialization, making this Not so good in memory handling. 
* No need to worry about the Execution context `this` as using it is not mandatory in Factory Functions. So dont use `this` and create unwanted side effects in Factory methods
* **Immutability** can be achieved by freezing objects in Factory Programming.


```
function TodoModel(){
    var todos = [];
    var lastChange = null;
    function addToPrivateList(){
        console.log("addToPrivateList"); 
    }
    function add() { console.log("add"); }

    function reload(){}

    return Object.freeze({
        add,
        reload
    });
}
```

**Example**

```
function createPlayer(name, age, gender, location) {  privateFunction() {    /* ... */  }
  return {
    name,
    age,
    gender,
    location,
    updatePlayer() {
      return `updated ${name}`;
    },
    deletePlayer() {
      return `deleted ${name}`;
    } 
  }
}// Initialisingconst krishna = createPlayer('Krishna', 26, 'M', 'Chennai');
```



**Extra reads**

* <https://medium.com/programming-essentials/class-vs-factory-function-exploring-the-way-forward-73258b6a8d15>
* <https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1>

---
layout: post
title:  "A Simple Approach to Understanding \'this\' in JavaScript"
date:   2020-03-26 14:37:00 +0530
description: "A post explaining the concept of \'this\' in JavaScript and explaining the related functions"
categories: ['JavaScript']
author: "Shivansh Kumar"
keywords: "technokami, JavaScript, coding, JavaScript 'this', programming, Object Oriented Programming, OOPs in JavaScript, learn, howto, tech no kami"
comments: true
---

# A Simple Approach to Understanding 'this' in JavaScript
###### March 21, 2020
##### -By Shivansh Kumar 
The concept of 'this' can be hard to get your head around especially if it's your first time learning it,
and let's be honest we all have been through the phase where we have dedicated hours just digging through this concept, here I try to provide a simple approach to understanding 'this' in JavaScript and clearing up the confusions related to it.

![Heading Image](https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)

## So what is 'this'?

The keyword 'this' in JavaScript carries with it the information about the execution context when used in non-strict mode, which in easy words means that it tells you which Object environment you are currently in, here's a simple example to better explain it.
```javascript
var obj = { f: function(){console.log(this)} };
console.log(this);
obj.f();
```
Here we see that when we call the function `f` as a property of `obj` we notice that the value of `this` is set to `obj` but when we log the value of `this` normally in the console it refers to the Global Object(which is the window object in case you are using a browser and global if you are using Node)

### Scope vs Context
One of the most confusing and essential thing we encounter while learning `this` is understanding what is this 'context' we keep talking about and how is it different from scope? Well, I have an interesting example to explain it,

```javascript
var c = 34;
var obj = {
            d: 11,
            c:3,
            f: function(){console.log(c,this);}
           };
```

Here, when we run the function `obj.f`, we get the value of c printed as 34 and the value of `this` is `obj`. Simply put, scope is how JavaScript understands what a variable is at the runtime and context is how it knows the function being called is method of which object.

For our example, When we run the function `obj.f`, when JavaScript encounters the variable 'c', you can think of it at it's most basic level that JavaScript asks the function 'Hey, is there any variable going by the name of 'c' defined inside of you?' , Well as there is no such declaration **inside** the function, it tells JavaScript that it doesn't know 'c' and asks JavaScript to ask it's parent scope(which is global scope in this case) about it, where JavaScript finally finds it.

Whereas the value of `this` is set to `obj` as the function `f` is called as it's method.

## Explicitly setting the value of 'this'

There are some functions defined in JavaScript which can explicitly set the value of 'this', these are call, apply and bind functions which we discuss in the below subtopics.

### Call and Apply Functions

These two functions are similar in their working, we explain them with the following example,
```javascript
var obj = {prop: 'Custom Object'};
var prop = 'Global Object';
function whatsThis() {
  return this.prop;  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global Object'
whatsThis.call(obj);  // 'Custom Object'
whatsThis.apply(obj); // 'Custom Object'
```
We can easily see from here how these two functions can be used to set the value of `this`, the first parameter of both functions sets the 'this' value.

### Bind Function
The bind function is quite different from the call and apply functions in terms that it returns a function which has same body and scope as the function being used upon but it's 'this' value is **permanently** bound to the object passed as the first parameter of the bind function, look at the following example,

```javascript
function f() {
  return this.a;
}
var h = f.bind({a: 'foo'});
console.log(h()); // foo
```

Here even though the function `h` is called in the global context it's `this` value is still set to `{a: 'foo'}`, in fact, the value of `this` for `h` cannot be changed now by any means.

## Value of 'this' for Arrow Functions
The introduction of Arrow functions in ES6 was not only a mere syntax change, but it also changed how the value of 'this' is decided for a function.

When using arrow functions the value of 'this' is set to it's enclosing lexical context's 'this', what this means is that the function's 'this' value will be the same as the 'this' value of whatever function or object it is defined inside. Here's an example to explain it better,

```javascript
var obj = {
  fun: function() {
    var x = (() => this);
    return x;
  }
};

// Calling fun as a method of obj, thus setting its 'this' to obj
// Assigning a reference to the returned function to fn
var fn = obj.fun();

//If we call fn without setting 'this', it would normally default
// to the global object
console.log(fn() === obj); // true
```

Here if `obj.fun()` had returned a normal function instead of an arrow function, `console.log(fn()===obj)` would have returned `false` instead as the value of `this`, in that case, would have become the global object. 

But since we used arrow function, it retained the value of `this` of it's enclosing parent which is the `fun` function over here, which was called as a method of `obj` thus setting it's `this` value to `obj`.


**Note:** Once the `this` value of arrow function is set it cannot be changed, even functions like call, apply, or bind cannot change the `this` value for the arrow function.
```javascript
var globalObject = this;
var foo = (() => this);
// Calling as a method of an object
var obj = {fun: foo};
console.log(obj.fun() === globalObject); // true

// Trying to set this using call
console.log(foo.call(obj) === globalObject); // true

// Trying to set this using bind
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
```
## In the end
The concept of `this` in JavaScript can be hard to grasp, but devoting it enough time and practicing it can make it more and more clear and believe me, this is how we all have learned it. I tried to explain `this` from my perspective as simply as I possibly can. I hope you at least gained something from it!

##### Sayonara!
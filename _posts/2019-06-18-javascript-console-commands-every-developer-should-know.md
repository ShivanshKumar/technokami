---
layout: post
title:  "JavaScript console commands every developer should know"
date:   2019-06-18 19:12:00 +0530
description: "JS console commands which can help you improve debugging your code and save your time!"
categories: ['Web-Development']
author: "Jay Mistry"
keywords: "tecnokami, tech no kami, js, javascript console commands, console.log, console.dir, console.assert, console.clear"
comments: true
---

If you are into frontend development, you may have, at some point, used the `console.log()` function to print to the JavaScript console at various points throughout your code to make sure it's working correctly or to locate the source of your bugs.

In this post, I am going to share some functions along with the `log()` function of the `console` object which can help you improve your debugging practises and speed up your development process!

**Note**: You can test out the commands yourself by opening the JS console in your developer tools by pressing Ctrl+Shift+I or F12 key and executing them there.

# console.log()
Let's begin with the most commonly used function - `console.log()`. It's syntax is as follows:
```js
console.log(message);
```
It sends the message to the console. The message can be anything - a string, number, array, object and so on.

#### Styling our console.log() output

Did you know that you can also style your logs? I will show you how you can do this!

Let's log out 'Stop' to the console, considering the case where we would like to warn them of doing something in the console, for e.g. **Facebook** used to do this to warn it's users to not execute scripts in the console that are supposed to help you 'hack' some accounts, but would rather hack yours.

For styling, the method expects '%c' in it's first argument and if found, considers the next argument as stylesheet.

```js
console.log('%cStop!', 'font-size: 48px; color: red;')
```
The output would be like the one showed below-

<img class='post-image' src="/assets/images/console-commands/log-css.png" alt="JS console.log() styling" />

# console.assert()
The `assert()` method takes in two arguments, the first is an expression which evaluates to `true` or `false`, and the next argument is the message you want to print if the expression evaluates to `false`.

The syntax is as shown below-
```js
// Syntax
console.assert(expression, message);

// Example
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(data => {
    console.assert(data, 'The data was not fetched.');
  })
```

# console.clear()
Just as the name suggests, the `clear()` method clears the console screen. It takes no arguments.

```js
// Syntax
console.clear()
```

# console.count()
Every time you call the `count()` method, it prints out the number of times the method was called.

It takes one argument - a title to uniquely identify different instances of this method.

```js
// Syntax
console.count(title)

// Example
let a = 10;
while(a--) {
  console.count('every')

  if (a % 2) {
    console.count('odd')
  }
}

console.count('every') // 11
console.count('odd') // 6
```

# console.dir()
The `dir()` method displays the objects passed to it in an object visualizer. It comes in handy when the objects have numerous properties.

```js
// Syntax
console.dir(object)

// Example
let person = {
  name: "John Doe",
  age: "21"
  gender: "male",
  height: "5'8\""
}

console.dir(person)
```

# console.time() & console.timeEnd()
The `time()` and `timeEnd()` methods can be used to calculate the time taken for any procedure. It prints the time taken after the `time()` method is called until the `timeEnd()` method.

It takes one argument - a 'name' to uniquely identify different timers.

```js
// Syntax
console.time(name);
  // Some process
console.timeEnd(name);

// Example
let a = 100000;

console.time('while');
while(a--);
console.timeEnd('while');

a = 100000;
console.time('for');
for (let i=0; i<a; i++);
console.timeEnd('for');
```

# console.trace()
The `trace()` method is used to identify the function with the error. It is useful to debug the code that has a high number of callbacks. It logs out a stack trace on the console window, and the trace includes the complete stack along with information like filename, line number & column number.

```js
// Syntax
console.trace()

// Example
const C = () => {
  console.trace();
}

const B = () => {
  C();
}

const A = () => {
  B();
}

A();
```

With the knowledge of all these functions in your utility belt, you are now capable of debugging your code more effectively, happy debugging!

If you have any other method of the `console` object in mind, which you think should be included in this post, let me know at any of my social profiles! Thank you for your time 😀

Adios folks!

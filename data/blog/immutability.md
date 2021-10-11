---
title: 'What is Immutability and why I love it'
date: '2021-10-10'
tags: ['javascript', 'code']
draft: false
summary: 'Ever heard about Immutability and wanted to know why and how? Then you came to the right place!'
---

There are many fancy terms that programmers use. Some of them are just a more eloquent version of an otherwise boring-sounding word. Others describe something which can’t really be said in one single word. Immutability is one of the latter. Here is my take of describing it in plain English:

> Immutability means not changing something.

_But why would I not change something? I’m a developer, I create things_, I hear you saying. But don’t worry, you will still be able to change the world if you try to use the power of immutability.

## Immutability in JavaScript

If you know a bit of JavaScript you probably know that there are three keywords to define a variable: `var`, `let`, and `const`.

<small> (side note: you should not use `var`, read [here](https://levelup.gitconnected.com/stop-using-var-to-declare-variables-in-javascript-6c0caec16f43) why)</small>.
There is a difference between `var`/`let` and `const`:

Variables that are declared with either `var`or `let` can be re-assigned later in the code while variables declared using `const` are constant and can not be re-declared. Here is a code sample:

```js
let name = 'ti'
var age = 22
const job = 'WebDev'

// whoops typo
name = 'tim'
age = 23

job = 'SysAdmin'
```

This code won’t work and instead, we will receive the following error:

`Uncaught TypeError: Assignment to constant variable.`

I guess I got quite lucky because I want to be a WebDev and not a SysAdmin, so it was quite smart by me to use a const here ;). But jokes aside, the easiest and most obvious way to achieve immutability in JavaScript is just to use const when you assign a value to a variable.

## Wait, that’s it?

Well if that would have been all, this blog post would be over right now. But JS has some little gotchas which make things just a bit more complicated: Objects and Arrays. Why? Let’s look at another code example:

```js
const person = { name: 'tim', age: 23 }
const hobbies = []

hobbies.push('coding')
hobbies.push('football')

person.hobbies = hobbies
```

Does this code compile? Yes, it does. And why? We are actually never re-assigning the initially created variables. We are either calling functions on it like calling `hobbies.push` which changes the variable or re-assigning a nested value on an object like `person.hobbies = hobbies`.

**And why is this a problem?**
Well, we defined both of those variables as `const` which could make you think, that this variable is constant and it can **not** be changed later in the code. But Arrays and Objects in JavaScript are special and don’t follow the rule here!

_So are we just doomed in JavaScript? Can’t we be immutable?_
We are not doomed, we just need to change our mindset a bit. Let’s look at another code example which is using mutable code:

```js
function capitalizeEachWord(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i] = elements[i].toUpperCase()
  }
  return elements
}
```

This code takes in an array of elements and returns an array with the same elements but each element will be capitalized. But you might have noticed something about this function. The first, but no important thing is that it will fail if one of the elements is not a `string`, but most importantly:
This function will change the array which is passed in! What does this mean? Let’s look at another code example:

```js
const names = ['Steve', 'Bill', 'Elon']
const bigNames = capitalizeEachWord(names)

// easy, right?
console.log(bigNames) // logs ["STEVE", "BILL", "ELON"]

console.log(names) // logs ["STEVE", "BILL", "ELON"]
// uhm what?
```

Even though we defined our array of names as a constant, our function still was able to change the value of the passed array. So let’s fix our code so it won’t change the array:

```js
function capitalizeEachWord(elements) {
  return elements.map((currentElement) => {
    return currentElement.toUpperCase()
  })
}
```

In this example we are using the `Array.map` method which returns a new array instead of mutating the original one.

[Here](https://blog.cloudboost.io/react-redux-immutable-update-cheat-sheet-296bfdd1f19) is a really good cheat sheet for all the ways to immutably update objects and arrays.

## Why do I love it?

I personally really like immutability and started loving it when when I used Redux on a daily basis. I think immutable code is much cleaner and more maintainable because there are no side effects. The code is really concise because instead of updating a variable that had been declared 50 lines above the current line you just create a new one. In my opinion, it is really clear what is happening with the code. I also think that using immutable methods like `Array.filter` to remove an element from an array instead of using `Array.splice` makes the code much safer and doesn’t give me a false sense of security. If I read `const array = [1, 2, 3];` I just assume that it won’t be changed because it’s constant.

## Why isn’t everyone doing it?

Well, just like all other patterns in programming this is a really subjective topic. Each developer likes other languages and patterns and like everything in life there are always pros and cons to using it. One of the cons of immutability is memory management. If we have an array with 10,000 elements and we call `.map` on it, we will have two arrays with 10,000 elements, which means we just doubled the memory used by our application. One other reason is that immutable programming actually takes more effort and might not feel _right_. Why can’t I push to an array? Why does this function exist if I shouldn’t be using it?

## So should you be obsessed about it as well?

As with everything on the internet, you should never follow someone’s advice blindly! If you are not forced to write immutable code (e.g. when working with Redux), you can just do what feels right to you. It will take some time and effort to get used to it and it might be really frustrating not to use some functions which you just learned to use. But if you still like the approach, you will probably love [Immer](https://immerjs.github.io/immer/) which is a JavaScript library that makes immutability super easy, because it lets use mutable code and just takes care of the rest. [Here](https://medium.com/hackernoon/introducing-immer-immutability-the-easy-way-9d73d8f71cb3) is a cool blog post by the creator of Immer which tells you why he created it!

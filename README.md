# lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @julezfitz/lotide`

**Require it:**

`const _ = require('@julezfitz/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: Takes the first item in an array
* `function2(tail)`: Removes the first item from an array and returns the rest of the array
* `function3(middle)`: Returns the middle item in an array (or two items for an array with an even number of items)
* `function4(eqArrays)`: Returns true if two arrays are equal in length and values
* `function5(countLetters)`: Given a letter, it counts the number of that character in a given string 
* `function6(assertArraysEqual)`: Returns assertion passed if eqArrays returns true, and assertion failed if they are not
* `function7(assertEqual)`: Compares an actual and expected result and returns assertion passed if they are equal and failed otherwise
* `function8(assertObjectsEqual)`: Compares two objects using eqObjects and if they are equal returns assertion passed, otherwise assertion failed 
* `function9(countOnly)`: When given an input, it counts the number of instances of that input in an array
* `function10(eqObjects)`: Compares two objects and returns true if they are the same and false otherwise 
* `function11(findKey)`: When given a value and an object it returns the first truthy key
* `function12(findKeyByValue)`:  When given a specific value, returns that key
* `function13(flatten)`: Removes sub-arrays from an array and lists all the values in their original order in a new array
* `function14(letterPositions)`: Return the index number of a given character in a given string 
* `function15(map)`: Given an array and a callback function, map returns a new array based on the callback results 
* `function16(takeUntil)`: Given an array and a callback function, take until returns a new array which includes the results of the starting array up to the point indicated by the callback
  
# is-this-correct

[![Build Status](https://travis-ci.org/SelimAbidin/is-this-correct.svg?branch=master)](https://github.com/SelimAbidin/isCCW)


this-is-correct library is a light package of useful validation functions

###### is this a mail adress?
```js
const {email} = require('is-this-correct')
email('testmail@mymailservices.com') // true
email('testmail@mymailservices.com.tr') // true
email('@mymailservices.com') // false
email('test@mymailservices') // false
```


###### is this least 6 character?
```js
const {least6Char} = require('is-this-correct')
least6Char('123456') // true
least6Char('1234') // false
least6Char(123456) // true
least6Char(12345) // false
```

###### is this a function?
```js
const {isFunction} = require('is-this-correct')
let testFnc = function () { }
isFunction(testFnc) // true
```

###### is this an empty string?
```js
const {isStringEmpty} = require('is-this-correct')
let emptyString = ""
isStringEmpty(emptyString) // true

let str = "notempty"
isStringEmpty(str) // false
```

###### is this a number?
```js
const {isNumber} = require('is-this-correct')
let nmr = 1
isNumber(nmr) // true
let str = "ds"
isNumber(str) // false
```
var assert = require('assert');
var {isStringEmail, email, isFunction, least6Char, isStringEmpty, isNumber} = require('./')


describe('isStringEmail', function() { 

      it('String should be mail : ysabidin@gmail.com ', function() {
            assert.equal(true, isStringEmail('ysabidin@gmail.com'))
      })

      it('String should not be mail : ysa bidin@gmail.com ', function() {
            assert.equal(false, isStringEmail("ysa bidin@gmail.com"))
      })

      it('String should not be mail : ysabidin@gmailcom ', function() {
            assert.equal(false, isStringEmail("ysabidin@gmailcom"));
      })

      it('String should be mail : ysabidin@gmail.com.tr ', function() {
            assert.equal(true, isStringEmail("ysabidin@gmail.com.tr"));
      })

})

describe('email', function() { 

      it('String should be mail : ysabidin@gmail.com ', function() {
            assert.equal(true, email('ysabidin@gmail.com'))
      })

      it('String should not be mail : ysa bidin@gmail.com ', function() {
            assert.equal(false, email("ysa bidin@gmail.com"))
      })

      it('String should not be mail : ysabidin@gmailcom ', function() {
            assert.equal(false, email("ysabidin@gmailcom"));
      })

      it('String should be mail : ysabidin@gmail.com.tr ', function() {
            assert.equal(true, email("ysabidin@gmail.com.tr"));
      })

})



describe('least6Char', function() { 

      it('Mustbe 6 char : "123456" ', function() {
            assert.equal(true, least6Char("123456"))
      })

      it('Number must be 6 char : 123456 ', function() {
            assert.equal(true, least6Char(123456))
      })

      it('Must not be 6 char : "12345" ', function() {
            assert.equal(false, least6Char("12345"))
      })

      it('Number must be 6 char : 12345 ', function() {
            assert.equal(false, least6Char(12345))
      })
   
})


describe('isFunction', function() { 

      var a = function () {}

      it('Must be a functon ', function() {
            assert.equal(true, isFunction(a))
      })

      it('undefined Must not be a functon ', function() {
            assert.equal(false, isFunction(undefined))
      })

      it('null Must not be a functon ', function() {
            assert.equal(false, isFunction(null))
      })

      it('12 Must not be a functon ', function() {
            assert.equal(false, isFunction(12))
      })
   
})

describe('isStringEmpty', function() { 



      it('Testing "test" ', function() {
            let test = "test" 
            assert.equal(false, isStringEmpty(test))
      })

      it('Testing " test" ', function() {
            let test = " test"
            assert.equal(false, isStringEmpty(test))
      })

      it('Testing "  " ', function() {
            let test  = "  "
            assert.equal(true, isStringEmpty(test))
      })

      it('Testing "" ', function() {
            let test  = ""
            assert.equal(true, isStringEmpty(test))
      })


      it('Testing " test  " ', function() {
            let test  = " test  "
            assert.equal(false, isStringEmpty(test))
      })

      it('Testing "0" ', function() {
            let test  = "0"
            assert.equal(false, isStringEmpty(test))
      })
      
      it('Testing "12345" ', function() {
            let test  = "12345"
            assert.equal(false, isStringEmpty(test))
      })
   
})


describe('isNumber', function() { 


      it('Testing "12345" true ', function() {
            let test = "12345" 
            assert.equal(true, isNumber(test))
      })

      it('Testing 12345 true ', function() {
            let test = 12345
            assert.equal(true, isNumber(test))
      })

      it('Testing "1.2345" true', function() {
            let test = "1.2345" 
            assert.equal(true, isNumber(test))
      })
      
      it('Testing 1.2345 true ', function() {
            let test = 1.2345 
            assert.equal(true, isNumber(test))
      })

      it('Testing "test" false', function() {
            let test = "test" 
            assert.equal(false, isNumber(test))
      })
   
      it('Testing "true" false', function() {
            let test = "true" 
            assert.equal(false, isNumber(test))
      })

      it('Testing true false', function() {
            let test = true 
            assert.equal(false, isNumber(test))
      })
})





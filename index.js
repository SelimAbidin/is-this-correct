

// attribution https://stackoverflow.com/a/46181/1345303
function isStringEmail(string) {

      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(string.toLowerCase());

}

function email(value){
      return isStringEmail(value)
}

/**
 * if param is undefined or null will return false
 * if param is lower than 6 will return false
 * if param is bigger than 5 or equal to 6, will return true
 * @param {*} value will be converted to string if not a string (no value check)
 * @return {Boolean} 
 */
function least6Char(value){

      if(value !== undefined && value !== null) {
            return value.toString().length >= 6
      }
      return false
}


export {
        isStringEmail,
        email,
        least6Char
      }
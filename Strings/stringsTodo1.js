/* 
  * Removing blanks 
  * Create a function that, given a string, returns all of that strings contents
  * but without blanks 
  * Examples => 
  * removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
  * removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"
  */
    removeBlanks = (str) => {
      // Intialize a new str 
      let newStr = ""
      // Iterate through the str 
      for ( i in str ) {
      // If the str is not a space 
        if ( str[i] !== ' ' ) {
      // Add it to the newStr
          newStr += str[i]
        }
      }
      // Return the new str
      return newStr
    }
     let str = "Play that funky music"
    console.log(removeBlanks(str))

/* 
  * Get Digits
  * Create a JS function that a given str, returns the integer made from the strings digits 
  * Examples => 
  * getDigits("abc8c0d1ngd0j0!8") => 801008
  * getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680
  */

    getDigits = (str) => {
      let numStr = " "
      for ( let i in str ) {
        if (!NaN(str)){
          numStr += str[i]
        }
      }
      return numStr
    }
     let str = "kj2h12jk4jh" // -> should return 2124
     console.log(getDigits(str))

/* 
  * Count Non-Spaces
  * Create a function that, given a string, returns the number of non-space 
  * characters found in the string. 
  * Examples:
  * countNonSpaces("Honey pie, you are driving me crazy") => 29
  * countNonSpaces("Hello world !") => 11
  */
   countNoSpaces = (str) => {
     console.log(str.length)
     // Split the array into seperate items to loop through
     strArr = str.split(" ")
     // new array to hold length count
     countArr = []
     // Loop though each item 
     for ( i in strArr ) {
       // If it is not a space
       if (strArr[i] !== " ") {
         // Add to count
         countArr += strArr[i]
       }
     }
     // Return the length of the countArr
     return countArr.length
   }
     let str = "Hello World"
     console.log(countNoSpaces(str))
/* 
  * Acronyms
  * Create a function that given a str, returns the the first letter of every word 
  * capitalized and as an Acronym 
  * Examples => 
  * acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW".  
  */

  acronym = (str) => {
    strArr = str.split(" ") // Spplit the str into seperate items in an array
    let bin = "" // Bin for the new acronym
    for ( let i in strArr ){ // Iterate through the array 
      if (strArr[i].length > 0) { // Remove the spaces
          bin += strArr[i][0].toUpperCase // Concate the filtered str into bin 'toUpperCase'
()       }
    }
    return bin
  }
  console.log(acronym(" theres no free lunch - gotta pay yer way "))

/* Remove Shorter Strings
  *
  *  Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
  *
  *  Examples:
  *
  *  removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
  *  removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']
  */

  yeetShorties = (strArr, num) => {
    // Intialize a new bin array
    let newArr = []
    // The video helped here, I did not no how to do this without push
    let index = 0
    // Iterate through that array and evaluate is they longer or shorter than the specified number
    for ( let i in strArr ) {
    // Remove them if they do not meet the requirements >= (num) 
      if ( strArr[i].length >= num ) {
        // if the value is >= num add to new array
        newArr[index++] = strArr[i]
      }
    }
    // Return the new array
    return newArr
  }
  console.log(yeetShorties(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))

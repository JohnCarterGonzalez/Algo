  /*
  * Given an array and an additional value, insert the additional at the beginning 
  */
//  pushFront = ( array, num ) => {
//    for ( let i = array.length; i >= 0; i-- ) { // move to the right
//      array[i] = array[i-1] // Creates an addtional space and will allow for num to be inserted here
//    }
//    
//    array[0] = num // Insert the value into the beginning
//    return array // Return the changed array
//  }
//console.log(pushFront([1, 2, 3, 4], 17))

/* 
  * popFront, given an array, remove and return the value at the start of the array, 
  * print the value 
  * Example => popFront([ 0, 5, 10, 15 ]) => 0 returned and removed from the array
  */

 // popFront = ( array ) => {
 //   console.log(array)
 //   temp = array[0] // Save the value at the start of the array
 //   array.shift() // Shift the values of the array to the left
 //   console.log(array)
 //   return temp
 // }
 // console.log(popFront([2, 3, 4, 5]))
//

/* 
  * Given an array, index, and additional value, insert the value at the given 
  * index
  * Example => insertAt([100, 200, 5], 2, 311) => [100, 200, 311, 5]
  */

  insertAt = ( array, index, num ) => {
    console.log(array)
    for ( let i = array.length; i >= index; i-- ) {
      array[i] = array[i-1]
    }
    array[index] = num
    return array
  }

  console.log(insertAt([1, 2, 3, 4], 2, 8))

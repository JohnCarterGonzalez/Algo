/* 
  * Add Front 
  * Write a method that accpets a value and create a new node, assign it to the 
  * list head and return a pointer to the new head node
  */

  // Node class 
  class Node {
    // Constructor takes a singel parameter, data for node 
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  class SLL {
    //  Constructor for the SLL
    constructor(){
      this.head = null
    }

    // Create a new node with the input value 
    addFront(val) {
      let new_node = new Node(val)
      // Check to see if the current list doesnt have a head (empty)
      // if empty make the 'new_node' the head
      if( !this.head ) {
        this.head = new_node
        return this
      }

      // If the list is not empty, assign the head to be the next node 
      new_node.next = this.head

      // Assign the new_node to the head of the list 
      this.head = new_node
      return this.head
    }

    /*
      * A method to remove the head node and return the new list head node
      * is the list is empty, return null
      */
      removeFront(){
        // Check to see if we are at the this.head 
        // if the list is empty return null
        if ( this.head == null ) {
          return this.head
        }
        // If at the head, remove the node
        let headRemove = this.head
        // Make the new head by utilizing the next pointer of the old head         
        this.head = headRemove.next
        // Now that the head has been moved, make the headRemove = null
        headRemove.next = null
        // Return the new list head
        return this.head
      }

    /* 
      * A method to return the value (not node) at the head of the list
      * if the list is empty return null
      */
      front() {
        // If this.head is null ? return null : else return this.head.value
        return this.head == null ? null : this.head.data
      }

    /*
      * Create a method that uses a while loop and a runner to return 
      * a string containing all list values
      */
      display() {
        // Start the runner at the head of the list
        let runner = this.head
        // Instantiate an array to hold the head.data value
        let displayArr = []

        // Use a while loop to iterate through unknow amount of nodes
        while ( runner !== null ) {
            displayArr.push(runner.data)
            runner = runner.next
        }
        return displayArr
      }
  }
  SLL1 = new SLL()
  //console.log(SLL1.addFront(18))
  console.log(SLL1.addFront(12))
  console.log(SLL1.addFront(17))
  //console.log(SLL1.removeFront())
  //console.log(SLL1.front())
  console.log(SLL1.display())

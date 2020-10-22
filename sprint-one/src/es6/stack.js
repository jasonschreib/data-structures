class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    //create unique vals for the object instance
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    //add the value to the end of the stack
    this.storage[this.count + 1] = value;
    //increase the count prop of the object instance
    this.count++;
  }

  pop() {
    //set var for the item to be removed
    var popped = this.storage[this.count];
    //remove the item from the back of the queue
    delete this.storage[this.count];
    //decrement the count
    this.count--;
    //if the count is less than zero
    if (this.count < 0) {
      //then set it to zero
      this.count = 0;
    }

    //return the item we want removed
    return popped;
  }

  size() {
    //return the count prop of the object instance
    return this.count;
  }

}
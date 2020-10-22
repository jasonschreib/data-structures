class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    //create unique props for the object instance
    this.storage = {};
    this.totalElements = 0;
    this.front = 0;
    this.back = 0;
  }

  enqueue(value) {
    //add the value to the end of the queue
    this.storage[this.back] = value;
    //increment the back prop by one
    this.back++;
    //increment the totalElements prop by one
    this.totalElements++;
  }

  dequeue() {
    //set var for the element to be removed
    var dequeued = this.storage[this.front];
    //remove the value from the front of the queue
    delete this.storage[this.front];
    //increment the front prop of the object instance
    this.front++;
    //decrement the totalElements prop of the object instance
    this.totalElements--;
    //if the totalElements prop is less than zero
    if (this.totalElements < 0) {
      //then set it equal to zero
      this.totalElements = 0;
    }
    //return the element that want to be removed
    return dequeued;
  }

  size() {
    //return the totalElements prop of the object instance
    return this.totalElements;
  }

}
